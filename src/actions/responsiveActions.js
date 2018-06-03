import { WINDOW_RESIZE } from './actionTypes';

export function windowResize(containerWidth) {
  return (dispatch) => {
    dispatch({
      type: WINDOW_RESIZE,
      containerWidth: containerWidth
    });
  }
}
