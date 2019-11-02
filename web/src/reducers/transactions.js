import * as actionTypes from 'actions/actionTypes';

const initialState = {
   data: [],
   status: true,
   paginationStatus: false,
   pageNumber: 1
};

const transactions = (state = initialState, action) => {
   let transData;

   switch (action.type) {
      case actionTypes.FETCH_TRANSACTIONS:
         // Get current state and add a new page
         transData = [...state.data];
         transData[action.page - 1] = action.data;

         return {
            ...state,
            data: transData,
            status: true
         };

      case actionTypes.FETCH_TRANSACTIONS_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actionTypes.ADD_TRANSACTION:
         // If the last page reached the elements limit, say 20-30, then create new one
         // And add the transaction here
         transData = [...state.data];

         // Count elements on last page
         const len = transData.length;
         let lastPageElementsCount = 0;

         for (const el of transData[len - 1]) {
            lastPageElementsCount++;
         }

         if (lastPageElementsCount > 20) {
            // If it contains more than 20 elements, add a new page
            transData[len] = [
               ...transData[len],
               {
                  ...action.data,
                  id: action.transId
               }
            ];
         } else {
            // If there is a place for a new element, just add it
            transData[len - 1] = [
               ...transData[len - 1],
               {
                  ...action.data,
                  id: action.transId
               }
            ];
         }

         return {
            ...state,
            data: transData
         };

      case actionTypes.FETCH_TRANSACTIONS_PAGINATION_STATUS:
         return {
            ...state,
            paginationStatus: action.status
         };

      case actionTypes.SET_TRANSACTIONS_PAGE:
         return {
            ...state,
            pageNumber: action.pageNumber
         };

      default:
         return state;
   }
};

export default transactions;
