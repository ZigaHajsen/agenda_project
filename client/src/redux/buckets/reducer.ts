import redux from 'redux';
import { bucketActionTypes } from './types';

export const bucketsReducer = (state = [], action: redux.AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case bucketActionTypes.GET_BUCKETS_SUCCESS:
      return payload;
    case bucketActionTypes.GET_BUCKETS_FAIL:
    case bucketActionTypes.CREATE_BUCKET_SUCCESS:
    case bucketActionTypes.CREATE_BUCKET_FAIL:
    case bucketActionTypes.DELETE_BUCKET_SUCCESS:
    case bucketActionTypes.DELETE_BUCKET_FAIL:
    default:
      return state;
  }
};
