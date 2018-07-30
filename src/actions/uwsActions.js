import { CLIENT_CONNECT } from './actionTypes';

export function createWSClient(token) {
  let port = process.env.PORT || '8128/';
  const ws = new WebSocket('ws://localhost:' + port + token);

  return (dispatch) => {
    dispatch({
      type: CLIENT_CONNECT,
      socket: ws
    });
  }
}
