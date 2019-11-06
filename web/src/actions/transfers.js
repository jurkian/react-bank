import { getMyTransfers, createTransfer } from 'api/transfers';
import * as actionTypes from './actionTypes';

export const fetchTransfers = () => async dispatch => {
   try {
      // Set status to false on every start, so it can be reusable
      dispatch(fetchTransfersStatus(false));

      const data = await getMyTransfers();

      if (!data) {
         dispatch(fetchTransfersStatus(false));
         return;
      }

      dispatch({ type: actionTypes.FETCH_TRANSFERS, data });
   } catch (err) {
      dispatch(fetchTransfersStatus(false));
   }
};

export const fetchTransfersStatus = status => ({
   type: actionTypes.FETCH_TRANSFERS_STATUS,
   status
});

export const addTransfer = data => async dispatch => {
   try {
      const transData = {
         ...data,
         amount: parseFloat(data.amount).toFixed(2),
         date: new Date(),
         payeeAccNumber: parseInt(data.payeeAccNumber, 10),
         payeeSortcode: parseInt(data.payeeSortcode, 10),
         status: 'Done',
         type: 'Transfer'
      };

      const transfer = await createTransfer(transData);

      if (!transfer) {
         dispatch(fetchTransfersStatus(false));
         return;
      }

      dispatch({
         type: actionTypes.ADD_TRANSFER,
         data: transData
      });
   } catch (err) {
      dispatch(fetchTransfersStatus(false));
   }
};
