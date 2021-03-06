import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, withRouter } from 'react-router-dom';

import './App.css';

// import { auth } from '../firebaseApp';
// import { LOGIN_SUCCESSFUL, LOGOUT_SUCCESSFUL } from '../actions/actionTypes';

import PrivateRoute from '../components/privateRoute';
import LoginForm from '../components/loginForm';
import RegisterForm from '../components/registerForm';
import LoggedInContainer from './LoggedInContainer';

import { createWSClient } from '../actions/wsActions';

// let unsubscribe;

class App extends Component {
  componentDidMount() {
  //   const { dispatch, history } = this.props;
  //   console.log(this.props.authenticated);
  //   // history.push('/login');
  //   unsubscribe = auth.onAuthStateChanged((user) => {
  //     console.log('Auth State Changed');
  //     this.props.createWSClient();
  //     if (user) {
  //       console.log('USER LOGGED IN');
  //       // user is signed in
  //       user.getIdToken(true).then((idToken) => {
  //         dispatch({
  //           type: LOGIN_SUCCESSFUL,
  //           email: user.email,
  //           token: idToken,
  //           verified: user.emailVerified,
  //         });
  //         // this.props.createWSClient(idToken);
  //         return idToken;
  //       })
  //       .then(() => {
  //         // console.log(history.go(-1));
  //         // history.push('/home');
  //         // history.replace('/home');
  //         history.go(-1);
  //       })
  //     } else {
  //       console.log('USER NOT LOGGED IN');
  //       // user is signed out
  //       history.push('/login');
  //       dispatch({
  //         type: LOGOUT_SUCCESSFUL
  //       });
  //     }
  //   });
    this.props.createWSClient();
  }

  componentWillUnmount() {
    // unsubscribe()
  }

  render() {
    return (
      <div className="App">
        <Route path="/login" component={LoginForm}/>
        <Route path="/register" component={RegisterForm}/>
        <PrivateRoute path="/home" component={LoggedInContainer}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    socket: state.ws.socket
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createWSClient: createWSClient,
    dispatch
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

