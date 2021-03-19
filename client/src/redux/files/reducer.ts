import redux from 'redux';
import { fileActionTypes } from './types';

export const filesReducer = (state = [], action: redux.AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case fileActionTypes.GET_FILES_SUCCESS:
      return payload;
    case fileActionTypes.UPLOAD_FILE_SUCCESS:
    case fileActionTypes.UPLOAD_FILE_FAIL:
    default:
      return state;
  }
};
