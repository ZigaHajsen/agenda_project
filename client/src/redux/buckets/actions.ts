import axios from 'axios';
import redux from 'redux';
import { bucketActionTypes } from './types';

export const getBuckets = () => async (dispatch: redux.Dispatch) => {
  try {
    const res = await axios.get('/api/buckets');

    dispatch({
      type: bucketActionTypes.GET_BUCKETS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: bucketActionTypes.GET_BUCKETS_FAIL,
    });
  }
};
