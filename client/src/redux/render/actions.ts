import redux from 'redux';
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

export const setBucket = (bucketId: string) => (dispatch: redux.Dispatch) => {
  dispatch({
    type: renderActionTypes.SET_BUCKET,
    payload: bucketId,
  });
};

export const removeBucket = () => (dispatch: redux.Dispatch) => {
  dispatch({
    type: renderActionTypes.REMOVE_BUCKET,
    payload: null,
  });
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
