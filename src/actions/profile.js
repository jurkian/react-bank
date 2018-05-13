import * as actionTypes from './actionTypes';
import firebase from 'tools/firebase';

export function fetchProfileStatus(status) {
   return {
      type: actionTypes.FETCH_PROFILE_STATUS,
      status
   };
}

export function changeUserDetails(email = null, password = null) {
   const user = firebase.auth().currentUser;

   return dispatch =>
      new Promise((resolve, reject) => {
         if (email) {
         }

         if (password) {
            user
               .updatePassword(password.trim())
               .then(() => resolve())
               .catch(err => reject(err));
         }
      });
}
