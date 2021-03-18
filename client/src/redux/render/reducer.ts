import redux from 'redux';
import { renderActionTypes } from './types';

const initialState = {
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
      return payload;
    default:
      return state;
  }
};
