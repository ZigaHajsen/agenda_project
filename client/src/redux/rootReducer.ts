import { combineReducers } from 'redux';
import { bucketsReducer } from './buckets/reducer';
import { renderReducer } from './render/reducer';

export default combineReducers({
  render: renderReducer,
  buckets: bucketsReducer,
});
