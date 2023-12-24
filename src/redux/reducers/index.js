import {combineReducers} from 'redux';
import authReducer from './auth';
import testNumber from './testNumberReducer';
import newsReducer from './news';
import messageReducer from './message';
import profileReducer from './profile';
import treeReducer from './tree';
import certificateReducer from './certificate';
import carbonFootprintReducer from './carbonFootprint';

export default combineReducers({
  auth: authReducer,
  test: testNumber,
  news: newsReducer,
  message: messageReducer,
  profile: profileReducer,
  tree: treeReducer,
  certificate: certificateReducer,
  carbonFootprint: carbonFootprintReducer,
});
