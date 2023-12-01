import {combineReducers} from 'redux';
import authReducer from './auth';
import testNumber from './testNumberReducer';

export default combineReducers({
  auth: authReducer,
  test: testNumber,
});
