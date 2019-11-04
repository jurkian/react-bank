import * as actionTypes from 'actions/actionTypes';

const initialState = {
   data: [],
   status: true,
   paginStatus: false,
   pageNumber: 1
};

const transfers = (state = initialState, action) => {
   let transData;

   switch (action.type) {
      case actionTypes.FETCH_TRANSFERS:
         // Get current state and add a new page
         transData = [...state.data];
         transData[action.page - 1] = action.data;

         return {
            ...state,
            data: transData,
            status: true
         };

      case actionTypes.FETCH_TRANSFERS_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actionTypes.ADD_TRANSFER:
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

      case actionTypes.FETCH_TRANSFERS_PAGIN_STATUS:
         return {
            ...state,
            paginStatus: action.status
         };

      case actionTypes.SET_TRANSFERS_PAGE:
         return {
            ...state,
            pageNumber: action.pageNumber
         };

      default:
         return state;
   }
};

export default transfers;
