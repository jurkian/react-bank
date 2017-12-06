import axios from 'axios';

export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const FETCH_ACCOUNTS_STATUS = 'FETCH_ACCOUNTS_STATUS';

export function fetchAccounts() {
   return function (dispatch) {
      axios.get('http://localhost:3001/accounts')
      .then(res => res.data)
      .then(data => {
         dispatch({ type: FETCH_ACCOUNTS, data });
         dispatch(fetchAccountsStatus(true));
      })
      .catch(error => {
         dispatch(fetchAccountsStatus(0));
      });
   }
}

export function fetchAccountsStatus(status) {
   return {
      type: FETCH_ACCOUNTS_STATUS,
      status
   }
}