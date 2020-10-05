import { reducer } from './reducer';
import { initialState } from './initialState';
import { onFetchStart, onFetchError, onFetchSuccess, removePostById, setActivePost } from './actions';

test('Should return initial values', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('Should handle fetch data type', () => {
  expect(reducer(initialState, onFetchStart())).toEqual({
    posts: [],
    loading: true,
    error: null,
    activePost: null,
  });
});

test('Should handle fetch data success type', () => {
  const mockData = [{ title: 'one' }, { title: 'two' }];
  expect(reducer(initialState, onFetchSuccess(mockData))).toEqual({
    posts: [...mockData],
    loading: false,
    error: null,
    activePost: null,
  });
});

test('Should handle fetch data error type', () => {
  expect(reducer(initialState, onFetchError())).toEqual({
    posts: [],
    loading: false,
    error: true,
    activePost: null,
  });
});

test('Should handle remove post by id type', () => {
  const id = '2222';
  const initial = {
    ...initialState,
    posts: [
      { id: '1111', title: '1111' },
      { id: '2222', title: '2222' },
      { id: '3333', title: '3333' },
      { id: '4444', title: '4444' },
    ],
  };
  const spectedState = {
    ...initialState,
    posts: [
      { id: '1111', title: '1111' },
      { id: '3333', title: '3333' },
      { id: '4444', title: '4444' },
    ],
  };
  expect(reducer(initial, removePostById(id))).toEqual(spectedState);
});

test('Should handle set active post type', () => {
  const postData = { id: '1111', title: '1111' };
  const spectedState = {
    ...initialState,
    activePost: { ...postData },
  };
  expect(reducer(initialState, setActivePost(postData))).toEqual(spectedState);
});
