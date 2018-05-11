import axios from 'axios';
import format from 'date-fns/format';
import * as actionTypes from './actionTypes';

export function fetchTransactions(page = 1, perPage = 8) {
   const fetchUrl = `/transactions?_page=${page}&_limit=${perPage}`;

   return dispatch =>
      new Promise((resolve, reject) => {
         // Set status to false on every start, so it can be reusable
         dispatch(fetchTransactionsStatus(false));

         axios
            .get(fetchUrl)
            .then(res => res.data)
            .then(data => {
               dispatch({ type: actionTypes.FETCH_TRANSACTIONS, data, page });
               resolve(data);
            })
            .catch(err => reject(err));
      });
}

export function fetchTransactionsStatus(status) {
   return {
      type: actionTypes.FETCH_TRANSACTIONS_STATUS,
      status
   };
}

export function addTransaction(data) {
   return dispatch =>
      new Promise((resolve, reject) => {
         axios(`/transactions`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            data: {
               date: format(new Date(), 'DD/MM/YYYY HH:mm'),
               type: 'Transfer',
               status: 'Done',
               ...data
            }
         })
            .then(res => res.data)
            .then(data => {
               dispatch({ type: actionTypes.ADD_TRANSACTION, data });
               resolve(data);
            })
            .catch(err => reject(err));
      });
}

// Pagination
export function fetchTransactionsPaginationStatus(status) {
   return {
      type: actionTypes.FETCH_TRANSACTIONS_PAGINATION_STATUS,
      status
   };
}

export function setTransactionsPage(pageNumber) {
   return dispatch =>
      new Promise((resolve, reject) => {
         dispatch({
            type: actionTypes.SET_TRANSACTIONS_PAGE,
            pageNumber
         });

         resolve();
      });
}
