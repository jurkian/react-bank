import firebase from 'tools/firebase';
import * as actionTypes from './actionTypes';

export const setAuthStatus = (status, email = null) => {
   return {
      type: actionTypes.SET_AUTH_STATUS,
      status,
      email
   };
};

export const auth = (email, password) => dispatch =>
   new Promise((resolve, reject) => {
      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(() => resolve())
         .catch(err => reject(err.code));
   });
