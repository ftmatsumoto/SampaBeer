import { WINDOW_RESIZE } from '../actions/actionTypes';

let initialState = {
  containerWidth: null
}

export default function responsiveReducers(state = initialState, action) {
  switch (action.type) {
    case WINDOW_RESIZE:
      return {
        ...state,
        containerWidth: action.containerWidth
      }
    default:
      return state
  }
}
