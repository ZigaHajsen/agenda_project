import redux from 'redux';
import { bucketActionTypes } from './types';

export const bucketsReducer = (state = [], action: redux.AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case bucketActionTypes.GET_BUCKETS_SUCCESS:
      return payload;
    case bucketActionTypes.GET_BUCKETS_FAIL:
      return payload;
    default:
      return state;
  }
};
