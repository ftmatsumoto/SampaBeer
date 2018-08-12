import { OPEN_EVENT_DIALOG, CLOSE_EVENT_DIALOG, TOGGLE_SIDEBAR } from './actionTypes';

export function toggleSidebar(currentState) {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_SIDEBAR,
      nextState: !currentState
    });
  }
}

export function openEventDialog() {
  return (dispatch) => {
    dispatch({
      type: OPEN_EVENT_DIALOG
    });
  }
}

export function closeEventDialog() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_EVENT_DIALOG
    });
  }
}
