import axios from 'axios';
import * as actionTypes from './actionTypes';

export function fetchAccounts() {
   return function(dispatch) {
      axios
         .get('/accounts')
         .then(res => res.data)
         .then(data => {
            dispatch({ type: actionTypes.FETCH_ACCOUNTS, data });
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
