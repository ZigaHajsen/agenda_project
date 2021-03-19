import redux from 'redux';
import { fileActionTypes } from './types';

export const filesReducer = (state = [], action: redux.AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case fileActionTypes.UPLOAD_FILE_SUCCESS:
      return payload;
    case fileActionTypes.UPLOAD_FILE_FAIL:
    default:
      return state;
  }
};
