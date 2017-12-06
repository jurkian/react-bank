import axios from 'axios';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTIONS_STATUS = 'FETCH_TRANSACTIONS_STATUS';

export function fetchTransactions() {
   return function (dispatch) {
      axios.get('http://localhost:3001/transactions')
      .then(res => res.data)
      .then(data => {
         dispatch({ type: FETCH_TRANSACTIONS, data });
         dispatch(fetchTransactionsStatus(true));
      })
      .catch(error => {
         dispatch(fetchTransactionsStatus(0));
      });
   }
}

export function fetchTransactionsStatus(status) {
   return {
      type: FETCH_TRANSACTIONS_STATUS,
      status
   }
}