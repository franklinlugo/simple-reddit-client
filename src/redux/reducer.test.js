import { reducer } from './reducer';
import { initialState } from './initialState';
import { onFetchStart, onFetchError, onFetchSuccess } from './actions';

test('Should return initial values', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('Should handle fetch data type', () => {
  expect(reducer(initialState, onFetchStart())).toEqual({
    posts: [],
    loading: true,
    error: null,
  });
});

test('Should handle fetch data success type', () => {
  const mockData = [{ title: 'one' }, { title: 'two' }];
  expect(reducer(initialState, onFetchSuccess(mockData))).toEqual({
    posts: [...mockData],
    loading: false,
    error: null,
  });
});

test('Should handle fetch data error type', () => {
  expect(reducer(initialState, onFetchError())).toEqual({
    posts: [],
    loading: false,
    error: true,
  });
});
