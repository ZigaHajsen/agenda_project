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

export const createBucket = (name: string, location: string) => async (
  dispatch: any
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, location });
  try {
    const res = await axios.post('/api/buckets', body, config);

    dispatch({
      type: bucketActionTypes.CREATE_BUCKET_SUCCESS,
      payload: res.data,
    });
    dispatch(getBuckets());
  } catch (err) {
    dispatch({
      type: bucketActionTypes.CREATE_BUCKET_FAIL,
    });
  }
};
