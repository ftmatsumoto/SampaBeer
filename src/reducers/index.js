import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive'

import authReducers from './authReducers';
import muiReducers from './muiReducers';
import wsReducers from './wsReducers';
import responsiveReducers from './responsiveReducers';
import loginregisterReducers from './loginregisterReducers';

const sbReducers = combineReducers({
  auth: authReducers,
  browser: responsiveStateReducer,
  loginregister: loginregisterReducers,
  responsive: responsiveReducers,
  mui: muiReducers,
  ws: wsReducers
})

export default sbReducers