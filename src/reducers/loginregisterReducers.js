import { HANDLE_CHANGE } from '../actions/actionTypes';

let initialState = {
  username: '',
  password: ''
}

export default function loginregisterReducers(state = initialState, action) {
  switch (action.type) {
    case HANDLE_CHANGE:
      if (action.textfield === 'username') {
        return {
          ...state,
          username: action.value
        }
      } else if (action.textfield === 'password') {
        return {
          ...state,
          password: action.value
        }
      } else {
        return state;
      }
    default:
      return state;
  }
}
