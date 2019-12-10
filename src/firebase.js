import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAATqwKHO8_NhiGfjVxZYGGje5sq-XpmVg",
    authDomain: "cihook-authentication.firebaseapp.com",
    databaseURL: "https://cihook-authentication.firebaseio.com",
    projectId: "cihook-authentication",
    storageBucket: "cihook-authentication.appspot.com",
    messagingSenderId: "711632316158",
    appId: "1:711632316158:web:1053b6d44e27ab7892e7af",
    measurementId: "G-ML3FWEN6C8"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider  = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const emailAuthProvider = new firebase.auth.EmailAuthProvider();
