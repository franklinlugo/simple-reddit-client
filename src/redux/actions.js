import * as TYPES from './types';
import { getTopPost } from '../services';

export const onFetchStart = () => ({ type: TYPES.FETCH_DATA });

export const onFetchSuccess = (payload) => ({
  type: TYPES.FETCH_DATA_SUCCESS,
  payload,
});

export const onFetchError = () => ({ type: TYPES.FETCH_DATA_ERROR });

export const onFetch = () => async (dispatch) => {
  dispatch(onFetchStart());
  try {
    const posts = await getTopPost();
    dispatch(onFetchSuccess(posts));
  } catch (error) {
    dispatch(onFetchError());
  }
};
