import { HANDLE_CHANGE, SEND_REGISTERFORM, VALIDATE_FORM } from '../actions/actionTypes';

let initialState = {
  username: '',
  password: '',
  fullname: '',
  email: '',
  bday: new Date(),
  telephone: '',
  fullnameError: '',
  emailError: '',
  telephoneError: '',
  bdayError: '',
  formValid: false
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
      } else if (action.textfield === 'fullname') {
        return {
          ...state,
          fullname: action.value
        }
      } else if (action.textfield === 'email') {
        return {
          ...state,
          email: action.value
        }
      } else if (action.textfield === 'bday') {
        return {
          ...state,
          bday: action.value
        }
      } else if (action.textfield === 'telephone') {
        return {
          ...state,
          telephone: action.value
        }
      } else {
        return state;
      }
    case VALIDATE_FORM:
      if (!action.formValid) {
        return {
          ...state,
          fullnameError: action.error.fullnameError,
          emailError: action.error.emailError,
          telephoneError: action.error.telephoneError,
          bdayError: action.error.bdayError,
          formValid: action.formValid
        }
      } else {
        return {
          ...state,
          fullnameError: '',
          emailError: '',
          telephoneError: '',
          bdayError: '',
          formValid: action.formValid
        };
      }
    case SEND_REGISTERFORM:
      // console.log(action);
      // return action.socket.send(action.data);
      return state;
    default:
      return state;
  }
}

