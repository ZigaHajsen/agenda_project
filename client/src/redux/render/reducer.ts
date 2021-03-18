import redux from 'redux';
import { renderActionTypes } from './types';

const initialState = {
  files: false,
  createNewBucket: false,
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
