import * as actions from 'actions/transactions';

const initialState = {
   data: [],
   status: false,
   paginationStatus: false,
   pageNumber: 1
};

const transactions = (state = initialState, action) => {
   let transactionsData;

   switch (action.type) {
      case actions.FETCH_TRANSACTIONS:
         transactionsData = [...state.data];

         // -1, because pages start from 1
         transactionsData[action.page - 1] = action.data;

         return {
            ...state,
            data: transactionsData
         };

      case actions.FETCH_TRANSACTIONS_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actions.FETCH_PAGINATION_STATUS:
         return {
            ...state,
            paginationStatus: action.status
         };

      case actions.ADD_TRANSACTION:
         transactionsData = [...state.data];
         transactionsData.push(action.data);

         return {
            ...state,
            data: transactionsData
         };

      case actions.SET_TRANSACTIONS_PAGE:
         return {
            ...state,
            pageNumber: action.pageNumber
         };

      default:
         return state;
   }
};

export default transactions;
