import { HANDLE_CHANGE, SEND_REGISTERFORM, VALIDATE_FORM } from './actionTypes';

export function handleChange(textfield, e) {
  return (dispatch) => {
    // console.log(textfield, e);
    // console.log(textfield, e.target.id, e.target.value);
    if (textfield === 'bday') {
      dispatch({
        type: HANDLE_CHANGE,
        value: e,
        textfield: textfield
      });
    } else {
      dispatch({
        type: HANDLE_CHANGE,
        value: e.target.value,
        textfield: textfield
      });
    }
  }
}

export function sendRegisterForm(data, socket) {
  console.log('1111111111');
  return (dispatch) => {
    let dataStringify = JSON.stringify(data);
    socket.send(dataStringify);
    dispatch({
      type: SEND_REGISTERFORM,
      socket: socket,
      data: dataStringify
    });
  }
}

export function getValidationState(data, socket) {
  return (dispatch) => {
    // console.log(data);
    let fullname = data.fullname;
    let email = data.email;
    let telephone = data.telephone;
    let bday = data.bday;

    let fullnameError = '';
    let emailError = '';
    let telephoneError = '';
    let bdayError = '';

    let nameregex = /^([ \u00c0-\u01ffa-zA-Z'-])+$/;
    let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let telephoneregex = /^([0-9]{2,3})[ ]?([0-9]{4,5})[ ]?([0-9]{4})$/;
    if (fullname.length > 0 && email.length > 0 && telephone.length > 0) {
      if (emailregex.test(email) && nameregex.test(fullname) && telephoneregex.test(telephone) && bday !== null) {
        let dataStringify = JSON.stringify({
          type: '/register',
          data: {
            fullname: data.fullname,
            email: data.email,
            telephone: data.telephone,
            bday: data.bday
          }
        });
        socket.send(dataStringify);
        return dispatch({
          type: VALIDATE_FORM,
          error: {
            fullnameError: '',
            emailError: '',
            telephoneError: '',
            bdayError: ''
          },
          formValid: true
        });
      } else {
        fullnameError = !nameregex.test(fullname) ? 'Campo obrigatório' : '';
        emailError = (!emailregex.test(email)) ? 'Preencha o e-mail de forma correta' : '';
        telephoneError = (!telephoneregex.test(telephone)) ? 'DDD 0000 00000 ou DDD 00000 00000' : '';
        bdayError = !bday ? 'Selecione uma data' : '';
        dispatch({
          type: VALIDATE_FORM,
          error: {
            fullnameError: fullnameError,
            emailError: emailError,
            telephoneError: telephoneError,
            bdayError: bdayError
          },
          formValid: false
        });
      }
    }
  }
}

