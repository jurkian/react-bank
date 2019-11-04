import * as actionTypes from './actionTypes';

export function fetchTransfers(page = 1, perPage = 8) {
   return dispatch =>
      new Promise((resolve, reject) => {
         // Set status to false on every start, so it can be reusable
         dispatch(fetchTransfersStatus(false));

         // db.collection('transfers')
         //    .orderBy('date')
         //    .get()
         //    .then(transfers => {
         //       // Get transfers
         //       let transData = transfers.docs.map(doc => ({
         //          ...doc.data(),
         //          id: doc.id
         //       }));

         //       dispatch({ type: actionTypes.FETCH_TRANSFERS, data: transData, page });
         //       resolve(transData);
         //    })
         //    .catch(err => reject(err));
      });
}

export function fetchTransfersStatus(status) {
   return {
      type: actionTypes.FETCH_TRANSFERS_STATUS,
      status
   };
}

export function addTransfer(data) {
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
         // db.collection('transfers')
         //    .add(transData)
         //    .then(newTrans => {
         //       dispatch({
         //          type: actionTypes.ADD_TRANSFER,
         //          transId: newTrans.id,
         //          data: transData
         //       });
         //       resolve(newTrans);
         //    })
         //    .catch(err => reject(err));
      });
}

// Pagination
export function fetchTransfersPaginStatus(status) {
   return {
      type: actionTypes.FETCH_TRANSFERS_PAGIN_STATUS,
      status
   };
}

export function setTransfersPage(pageNumber) {
   return dispatch =>
      new Promise((resolve, reject) => {
         dispatch({
            type: actionTypes.SET_TRANSFERS_PAGE,
            pageNumber
         });

         resolve();
      });
}
