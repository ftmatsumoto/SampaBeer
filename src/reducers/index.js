import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive'

import authReducers from './authReducers';
import muiReducers from './muiReducers';
import uwsReducers from './uwsReducers';
import responsiveReducers from './responsiveReducers';
import loginregisterReducers from './loginregisterReducers';

const sbReducers = combineReducers({
  auth: authReducers,
  browser: responsiveStateReducer,
  loginregisterReducers: loginregisterReducers,
  responsive: responsiveReducers,
  mui: muiReducers,
  uws: uwsReducers
})

export default sbReducers