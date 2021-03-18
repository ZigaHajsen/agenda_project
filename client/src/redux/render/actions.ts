import { renderActionTypes } from './types';

export const createNewBucketOn = () => (dispatch: any) => {
  dispatch({
    type: renderActionTypes.CREATE_NEW_BUCKET_ON,
    payload: { createNewBucket: true },
  });
};

export const createNewBucketOff = () => (dispatch: any) => {
  dispatch({
    type: renderActionTypes.CREATE_NEW_BUCKET_OFF,
    payload: { createNewBucket: false },
  });
};
