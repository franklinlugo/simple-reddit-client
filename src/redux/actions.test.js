import * as TYPES from './types';
import { onFetchStart, onFetchError, onFetchSuccess, onFetch, removePostById, setActivePost } from './actions';
import { getTopPost as getTopPostMock } from '../services';

jest.mock('../services');

test('Should return onFetchStart action type ', () => {
  expect(onFetchStart()).toEqual({ type: TYPES.FETCH_DATA });
});

test('Should return onFetchError action type ', () => {
  expect(onFetchError()).toEqual({ type: TYPES.FETCH_DATA_ERROR });
});

test('Should return onFetchSuccess action type ', () => {
  expect(onFetchSuccess([])).toEqual({ type: TYPES.FETCH_DATA_SUCCESS, payload: [] });
});

test('Should return removePostById action type ', () => {
  const id = ' 1234';
  expect(removePostById(id)).toEqual({ type: TYPES.REMOVE_POST_BY_ID, payload: id });
});

test('Should return setActivePost action type ', () => {
  const postData = { id: '001', title: 'post 001' };
  expect(setActivePost(postData)).toEqual({ type: TYPES.SET_ACTIVE_POST, payload: postData });
});

test('Should handle onFetch action type ', async () => {
  const mockDispatch = jest.fn();
  const mockData = [{ title: 'one' }, { title: 'two' }];
  getTopPostMock.mockResolvedValueOnce(mockData);

  await onFetch()(mockDispatch);

  expect(getTopPostMock).toBeCalledTimes(1);
  expect(mockDispatch).toHaveBeenNthCalledWith(1, onFetchStart());
  expect(mockDispatch).toHaveBeenNthCalledWith(2, onFetchSuccess(mockData));
});
