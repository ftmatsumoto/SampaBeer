import { OPEN_EVENT_DIALOG, CLOSE_EVENT_DIALOG, TOGGLE_SIDEBAR } from '../actions/actionTypes';

let initialState = {
  sidebarOpen: false
}

export default function muiReducers(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: action.nextState
      }
    case OPEN_EVENT_DIALOG:
      return {
        ...state,
        dialogEventOpen: true
      }
    case CLOSE_EVENT_DIALOG:
      return {
        ...state,
        dialogEventOpen: false
      }
    default:
      return state
  }
}

