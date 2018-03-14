import {
   FETCH_TRANSACTIONS,
   FETCH_TRANSACTIONS_STATUS,
   ADD_TRANSACTION
} from 'actions/transactions';

const initialState = {
   data: [],
   status: false
};

const transactions = (state = initialState, action) => {
   switch (action.type) {

      case FETCH_TRANSACTIONS:
         return {
            ...state,
            data: [...action.data]
         }

      case FETCH_TRANSACTIONS_STATUS:
         return {
            ...state,
            status: action.status
         }

      case ADD_TRANSACTION:
         return {
            ...state,
            data: [...state.data, {
               ...action.data
            }]
         }

      default: 
         return state;
   }
};

export default transactions;