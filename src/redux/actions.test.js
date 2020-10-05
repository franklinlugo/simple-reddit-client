import * as TYPES from './types';
import { onFetchStart, onFetchError, onFetchSuccess, onFetch } from './actions';
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

test('Should handle onFetch action type ', async () => {
  const mockDispatch = jest.fn();
  const mockData = [{ title: 'one' }, { title: 'two' }];
  getTopPostMock.mockResolvedValueOnce(mockData);

  await onFetch()(mockDispatch);

  expect(getTopPostMock).toBeCalledTimes(1);
  expect(mockDispatch).toHaveBeenNthCalledWith(1, onFetchStart());
  expect(mockDispatch).toHaveBeenNthCalledWith(2, onFetchSuccess(mockData));
});
