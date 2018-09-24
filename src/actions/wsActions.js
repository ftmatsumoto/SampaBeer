import { CLIENT_CONNECT } from './actionTypes';

export function createWSClient(token) {
  // let port = process.env.PORT ? 'https://sampa-beer.herokuapp.com/' + process.env.PORT : 'ws://localhost:8128/';
  // console.log(process.env.PORT ? process.env.PORT : '8128/');

  // This should be the port for production
  let port = 'wss://sampa-beer.herokuapp.com/';
  // let port = 'ws://localhost:8128/';
  const ws = new WebSocket(port);

  return (dispatch) => {
    dispatch({
      type: CLIENT_CONNECT,
      socket: ws
    });
  }
}
