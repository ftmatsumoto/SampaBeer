import { CLIENT_CONNECT, SEND_REGISTERFORM } from './actionTypes';

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
    // let request = new XMLHttpRequest();
    // if (this.getValidationState() === "success") {
    if (true) {
      let dataStringify = JSON.stringify(data);
      console.log(dataStringify);
      socket.send(dataStringify);
      // request.open("POST", "/register", true);
      // request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
      // request.onreadystatechange = () => {
      //   if (request.readyState === XMLHttpRequest.DONE && request.status === 201) {
      //     // currContext.setState({
      //     //   open: true
      //     // });
      //   }
      // };
      // request.send(dataStringify);
      // this.setState({
      //   firstValue: "",
      //   lastValue: "",
      //   emailValue: "",
      //   phoneValue: "",
      //   dateValue: null,
      //   timeValue: null
      // });
    }
  }
}
