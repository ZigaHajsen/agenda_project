import redux from 'redux';
import { renderActionTypes } from './types';

const initialState = {
  files: false,
  createNewBucket: false,
  bucket: null,
};

export const renderReducer = (
  state = initialState,
  action: redux.AnyAction
) => {
  const { type, payload } = action;

  switch (type) {
    case renderActionTypes.CREATE_NEW_BUCKET_ON:
    case renderActionTypes.CREATE_NEW_BUCKET_OFF:
      return {
        ...state,
        createNewBucket: payload,
      };
    case renderActionTypes.SET_BUCKET:
      return {
        ...state,
        bucket: payload,
      };
    case renderActionTypes.FILES_ON:
    case renderActionTypes.FILES_OFF:
      return {
        ...state,
        files: payload,
      };
    default:
      return state;
  }
};
