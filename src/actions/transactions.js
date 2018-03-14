import axios from 'axios';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTIONS_STATUS = 'FETCH_TRANSACTIONS_STATUS';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';

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

export function addTransaction(data) {
   return (dispatch) => new Promise((resolve, reject) => {
      axios(`http://localhost:3001/transactions`, {
         method: 'post',
         headers: { 'Content-Type': 'application/json' },
         data: {
            date: '24/07/2017 22:38',
            type: 'Transfer',
            status: 'Done',
            ...data
         }
      })
         .then(res => res.data)
         .then(data => {
            dispatch({ type: ADD_TRANSACTION, data });
            resolve(data);
         })
         .catch(err => reject(err));
   });
}