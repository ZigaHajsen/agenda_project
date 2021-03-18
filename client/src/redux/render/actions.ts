import { renderActionTypes } from './types';

export const createNewBucketOn = () => (dispatch: any) => {
  dispatch({
    type: renderActionTypes.CREATE_NEW_BUCKET_ON,
    payload: true,
  });
};

export const createNewBucketOff = () => (dispatch: any) => {
  dispatch({
    type: renderActionTypes.CREATE_NEW_BUCKET_OFF,
    payload: false,
  });
};

export const filesOn = () => (dispatch: any) => {
  dispatch({
    type: renderActionTypes.FILES_ON,
    payload: true,
  });
};

export const filesOff = () => (dispatch: any) => {
  dispatch({
    type: renderActionTypes.FILES_OFF,
    payload: false,
  });
};
