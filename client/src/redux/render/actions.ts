import redux from 'redux';
import axios from 'axios';
import { renderActionTypes } from './types';

export const createNewBucketOn = () => (dispatch: redux.Dispatch) => {
  dispatch({
    type: renderActionTypes.CREATE_NEW_BUCKET_ON,
    payload: true,
  });
};

export const createNewBucketOff = () => (dispatch: redux.Dispatch) => {
  dispatch({
    type: renderActionTypes.CREATE_NEW_BUCKET_OFF,
    payload: false,
  });
};

export const removeBucket = () => (dispatch: any) => {
  dispatch({
    type: renderActionTypes.REMOVE_BUCKET,
    payload: null,
  });
  dispatch(filesOff());
  dispatch(bucketDetailsOff());
};

export const setBucket = (bucketId: string) => async (dispatch: any) => {
  try {
    const res = await axios.get(`api/buckets/${bucketId}`);

    dispatch({
      type: renderActionTypes.SET_BUCKET_SUCCESS,
      payload: res.data,
    });
    dispatch(filesOn());
  } catch (err) {
    dispatch({
      type: renderActionTypes.SET_BUCKET_FAIL,
    });
  }
};

export const filesOn = () => (dispatch: redux.Dispatch) => {
  dispatch({
    type: renderActionTypes.FILES_ON,
    payload: true,
  });
};

export const filesOff = () => (dispatch: redux.Dispatch) => {
  dispatch({
    type: renderActionTypes.FILES_OFF,
    payload: false,
  });
};

export const bucketDetailsOn = () => (dispatch: redux.Dispatch) => {
  dispatch({
    type: renderActionTypes.BUCKET_DETAILS_ON,
    payload: true,
  });
};

export const bucketDetailsOff = () => (dispatch: redux.Dispatch) => {
  dispatch({
    type: renderActionTypes.BUCKET_DETAILS_OFF,
    payload: false,
  });
};
