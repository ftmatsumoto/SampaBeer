import { auth, googleProvider } from '../firebaseApp';
import { AUTH_USER, SIGN_OUT_USER, LOGIN_ATTEMPT, LOGIN_ERROR, LOGOUT_ATTEMPT } from './actionTypes';
import { history } from '../index.js';
// import { createWSClient } from './wsActions';

// export function register(credentials) {
  // return (dispatch) => {
  //   dispatch({
  //     type: REGISTER_ATTEMPT
  //   });
  //   console.log(auth)
  //   auth.createUserWithEmailAndPassword(credentials.usernameInput, credentials.passwordInput)
  //     .then((user) => {
  //       user.sendEmailVerification();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       dispatch({
  //         type: REGISTER_ERROR,
  //         error: err
  //       })
  //     });
  // }
// }

export function verifyAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        user.getIdToken(true)
          .then((idToken) => {
            // console.log('VERIFY AUTH', user);
            // createWSClient();
            dispatch(authUser(user.email, idToken, user.emailVerified));
            return
          })
          .then(() => {
            history.push('/home');
          });
      } else {
        dispatch(signOutUser());
      }
    });
  }
}

export function authUser(email, token, verified) {
  // console.log('AUTH_USER');
  return {
    type: AUTH_USER,
    email: email,
    token: token,
    verified: verified
  }
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER
  }
}

export function login(credentials) {
  return (dispatch) => {
    // alert(credentials.usernameInput, credentials.passwordInput);
    dispatch({
      type: LOGIN_ATTEMPT
    });
    auth.signInWithEmailAndPassword(credentials.usernameInput, credentials.passwordInput)
      .catch((err) => {
        alert(err);
        dispatch({
          type: LOGIN_ERROR,
          error: err
        });
      });
  }
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_ATTEMPT
    });
    auth.signOut().then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
  }
}

export function loginGoogle() {
  return (dispatch) => {
    if (!auth.currentUser) {
      googleProvider.addScope('profile');
      googleProvider.addScope('email');
      auth.signInWithRedirect(googleProvider);
      // [END signin]
    } else {
      // [START signout]
      auth.signOut();
      // [END signout]
    }
  }
}
