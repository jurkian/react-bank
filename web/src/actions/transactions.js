import firebase from 'tools/firebase';
import * as actionTypes from './actionTypes';

const db = firebase.firestore();

export function fetchTransactions(page = 1, perPage = 8) {
   return dispatch =>
      new Promise((resolve, reject) => {
         // Set status to false on every start, so it can be reusable
         dispatch(fetchTransactionsStatus(false));

         db
            .collection('transactions')
            .orderBy('date')
            .get()
            .then(transactions => {
               // Get transactions
               let transData = transactions.docs.map(doc => ({
                  ...doc.data(),
                  id: doc.id
               }));

               dispatch({ type: actionTypes.FETCH_TRANSACTIONS, data: transData, page });
               resolve(transData);
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
   const transData = {
      amount: parseFloat(data.amount).toFixed(2),
      date: new Date(),
      payee_acc_number: parseInt(data.payeeAccNumber, 10),
      payee_address: data.payeeAddress,
      payee_name: data.payeeName,
      payee_sortcode: parseInt(data.payeeSortcode, 10),
      reference: data.reference,
      source_acc_id: data.sourceAcc,
      status: 'Done',
      type: 'Transfer'
   };

   return dispatch =>
      new Promise((resolve, reject) => {
         db
            .collection('transactions')
            .add(transData)
            .then(newTrans => {
               dispatch({
                  type: actionTypes.ADD_TRANSACTION,
                  transId: newTrans.id,
                  data: transData
               });
               resolve(newTrans);
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
