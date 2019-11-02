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
            let accData = accounts.docs.map(doc => ({
               ...doc.data(),
               id: doc.id
            }));

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
