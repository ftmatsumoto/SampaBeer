import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC7LdarlaicjSWgq8h3JcNA34Jl3Rrw-_A",
  authDomain: "sampabeer2018.firebaseapp.com",
  databaseURL: "https://sampabeer2018.firebaseio.com",
  projectId: "sampabeer2018",
  storageBucket: "sampabeer2018.appspot.com",
  messagingSenderId: "234901513730"
};

export const firebaseApp = firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebaseApp.auth();
