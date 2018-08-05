import { CLIENT_CONNECT } from './actionTypes';

export function createWSClient(token) {
  // let port = process.env.PORT ? 'https://sampa-beer.herokuapp.com/' + process.env.PORT : 'ws://localhost:8128/';
  // console.log(process.env.PORT ? process.env.PORT : '8128/');
  // let port = 'ws://' + (process.env.PORT ? process.env.PORT : 'localhost:8128/');
  let port = 'wss://sampa-beer.herokuapp.com/';
  // console.log(process.env.PORT);
  const ws = new WebSocket(port);

  return (dispatch) => {
    dispatch({
      type: CLIENT_CONNECT,
      socket: ws
    });
  }
}
