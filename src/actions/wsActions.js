import { CLIENT_CONNECT } from './actionTypes';

export function createWSClient(token) {
  // let port = process.env.PORT ? 'https://sampa-beer.herokuapp.com/' + process.env.PORT : 'ws://localhost:8128/';
  let port = 'ws://localhost:' + process.env.PORT || '8128/';
  const ws = new WebSocket(port);

  return (dispatch) => {
    dispatch({
      type: CLIENT_CONNECT,
      socket: ws
    });
  }
}
