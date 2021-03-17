import { combineReducers } from 'redux';
import { bucketsReducer } from './buckets/reducer';

export default combineReducers({
  buckets: bucketsReducer,
});
