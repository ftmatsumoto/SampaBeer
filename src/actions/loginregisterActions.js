import { HANDLE_CHANGE } from './actionTypes';

export function handleChange(textfield, e) {
  return (dispatch) => {
    console.log(textfield, e.target.id, e.target.value);
    dispatch({
      type: HANDLE_CHANGE,
      value: e.target.value,
      textfield: textfield
    });
  }
}
