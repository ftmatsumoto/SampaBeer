import { CLIENT_CONNECT } from '../actions/actionTypes';

let initialState = {
  socket: null
}

export default function wsReducers(state = initialState, action) {
  switch (action.type) {
    case CLIENT_CONNECT:
      return {
        ...state,
        socket: action.socket
      }
    default:
      return state
  }
}