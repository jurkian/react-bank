import axios from 'axios';
import format from 'date-fns/format';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTIONS_STATUS = 'FETCH_TRANSACTIONS_STATUS';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const FETCH_PAGINATION_STATUS = 'FETCH_PAGINATION_STATUS';
export const SET_TRANSACTIONS_PAGE = 'SET_TRANSACTIONS_PAGE';

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
               dispatch({ type: FETCH_TRANSACTIONS, data, page });
               dispatch(fetchTransactionsStatus(true));
               resolve(data);
            })
            .catch(err => reject(err));
      });
}

export function fetchTransactionsStatus(status) {
   return {
      type: FETCH_TRANSACTIONS_STATUS,
      status
   };
}

export function setFetchPaginationStatus(status) {
   return {
      type: FETCH_PAGINATION_STATUS,
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
               dispatch({ type: ADD_TRANSACTION, data });
               resolve(data);
            })
            .catch(err => reject(err));
      });
}

export function setTransactionsPage(pageNumber) {
   return dispatch =>
      new Promise((resolve, reject) => {
         dispatch({
            type: SET_TRANSACTIONS_PAGE,
            pageNumber
         });

         resolve();
      });
}
