import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive'

import authReducers from './authReducers';
import muiReducers from './muiReducers';
import uwsReducers from './uwsReducers';
import responsiveReducers from './responsiveReducers';

const sbReducers = combineReducers({
  auth: authReducers,
  browser: responsiveStateReducer,
  responsive: responsiveReducers,
  mui: muiReducers,
  uws: uwsReducers
})

export default sbReducers