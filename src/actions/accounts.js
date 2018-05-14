import firebase from 'tools/firebase';
import * as actionTypes from './actionTypes';

const db = firebase.firestore();

export function fetchAccounts() {
   return dispatch => {
      db
         .collection('accounts')
         .get()
         .then(accounts => {
            // Get accounts
            let accData = [];
            let temp;

            accounts.docs.forEach(doc => {
               temp = doc.data();
               temp.id = doc.id;

               accData[doc.id] = temp;
            });

            dispatch({ type: actionTypes.FETCH_ACCOUNTS, data: accData });
         })
         .catch(error => dispatch(fetchAccountsStatus(false)));
   };
}

export function fetchAccountsStatus(status) {
   return {
      type: actionTypes.FETCH_ACCOUNTS_STATUS,
      status
   };
}
