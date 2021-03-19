import { combineReducers } from 'redux';
import { bucketsReducer } from './buckets/reducer';
import { renderReducer } from './render/reducer';
import { filesReducer } from './files/reducer';

export default combineReducers({
  render: renderReducer,
  buckets: bucketsReducer,
  files: filesReducer,
});
