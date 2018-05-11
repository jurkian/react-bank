import * as actionTypes from 'actions/actionTypes';

const initialState = {
   data: [],
   status: true,
   paginationStatus: false,
   pageNumber: 1
};

const transactions = (state = initialState, action) => {
   let transactionsData;

   switch (action.type) {
      case actionTypes.FETCH_TRANSACTIONS:
         transactionsData = [...state.data];

         // -1, because pages start from 1
         transactionsData[action.page - 1] = action.data;

         return {
            ...state,
            data: transactionsData,
            status: true
         };

      case actionTypes.FETCH_TRANSACTIONS_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actionTypes.ADD_TRANSACTION:
         transactionsData = [...state.data];
         transactionsData.push(action.data);

         return {
            ...state,
            data: transactionsData
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
