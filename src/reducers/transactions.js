import {
   FETCH_TRANSACTIONS,
   FETCH_TRANSACTIONS_STATUS,
   FETCH_PAGINATION_STATUS,
   ADD_TRANSACTION,
   SET_TRANSACTIONS_PAGE
} from 'actions/transactions';

const initialState = {
   data: [],
   status: false,
   paginationStatus: false,
   pageNumber: 1
};

const transactions = (state = initialState, action) => {
   switch (action.type) {

      case FETCH_TRANSACTIONS:
         const data = state.data;

         // -1, because pages start from 1
         data[action.page - 1] = action.data;

         return {
            ...state,
            data
         };

      case FETCH_TRANSACTIONS_STATUS:
         return {
            ...state,
            status: action.status
         }

      case FETCH_PAGINATION_STATUS:
         return {
            ...state,
            paginationStatus: action.status
         }

      case ADD_TRANSACTION:
         return {
            ...state,
            data: [...state.data, {
               ...action.data
            }]
         }

      case SET_TRANSACTIONS_PAGE:
         return {
            ...state,
            pageNumber: action.pageNumber
         }

      default:
         return state;
   }
};

export default transactions;