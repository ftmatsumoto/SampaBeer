import { CLIENT_CONNECT, SEND_REGISTERFORM } from '../actions/actionTypes';

let initialState = {
  socket: null
}

export default function uwsReducers(state = initialState, action) {
  switch (action.type) {
    case CLIENT_CONNECT:
      return {
        ...state,
        socket: action.socket
      }
    case SEND_REGISTERFORM:
      return {
        ...state
      }
    default:
      return state
  }
}