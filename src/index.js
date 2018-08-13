import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import {responsiveStoreEnhancer} from 'redux-responsive';

import sbReducers from './reducers';
import { verifyAuth } from './actions/authActions';
import registerServiceWorker from './registerServiceWorker';

import Root from './containers/Root';

import './index.css';

import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router'

// Create a history of your choosing (we're using a browser history in this case)
export const history = createBrowserHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  connectRouter(history)(sbReducers),
  composeEnhancers(responsiveStoreEnhancer,
    applyMiddleware(
      routerMiddleware(history),
      thunk)
  )
);

store.dispatch(verifyAuth());

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
);
registerServiceWorker();
