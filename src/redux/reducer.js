import { initialState } from './initialState';
import * as TYPES from './types';

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCH_DATA: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case TYPES.FETCH_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    }
    case TYPES.FETCH_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case TYPES.REMOVE_POST_BY_ID: {
      const id = action.payload;
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== id),
      };
    }
    default:
      return state;
  }
}
