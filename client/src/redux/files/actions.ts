import axios from 'axios';
import redux from 'redux';
import { fileActionTypes } from './types';

export const uploadFile = (
  name: string,
  size: number,
  lastModified: number,
  bucketId: string
) => async (dispatch: redux.Dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, size, lastModified });

  try {
    const res = await axios.post(
      `/api/buckets/${bucketId}/files`,
      body,
      config
    );

    dispatch({
      type: fileActionTypes.UPLOAD_FILE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: fileActionTypes.UPLOAD_FILE_FAIL,
    });
  }
};