import { CLIENT_CONNECT, SEND_REGISTERFORM, VALIDATE_FORM } from './actionTypes';

export function createWSClient(token) {
  const ws = new WebSocket('ws://localhost:8128/' + token);

  return (dispatch) => {
    dispatch({
      type: CLIENT_CONNECT,
      socket: ws
    });
  }
}

export function sendRegisterForm(data, socket) {
  return (dispatch) => {
    dispatch({
      type: SEND_REGISTERFORM
    });
    let currContext = this;
    if (true) {
      let dataStringify = JSON.stringify(data);
      socket.send(dataStringify);
    }
  }
}

export function getValidationState(data) {
  return (dispatch) => {
    let valid;
    let fullname = data.fullname;
    let email = data.emailValue;
    let telephone = data.telephoneValue;
    let bday = data.bdayValue;

    let nameregex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
    let emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let telephoneregex = /^([0-9]{2,3})[ ]?([0-9]{4,5})[ ]?([0-9]{4})$/;
    if (fullname.length > 0 && email.length > 0 && telephone.length > 0) {
      if (emailregex.test(email) && nameregex.test(fullname) && telephoneregex.test(telephone) && bday !== null) {
        valid = true;
      } else {
        if (!nameregex.test(fullname)) {
          this.setState({
            lastError: "Campo obrigatório"
          });
        }
        if (!emailregex.test(email)) {
          this.setState({
            emailError: "Preencha o e-mail de forma correta"
          });
        }
        if (!telephoneregex.test(telephone)) {
          this.setState({
            telephoneError: "DDD 0000 00000 ou DDD 00000 00000"
          });
        }
        if (!bday) {
          this.setState({
            timeError: "Selecione um horário"
          });
        }
        valid = false;
      }
    }
    dispatch({
      type: VALIDATE_FORM,
      formvalid: valid
    });
  }
}

