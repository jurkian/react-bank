import {
   FETCH_TRANSACTIONS,
   FETCH_TRANSACTIONS_STATUS 
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

      default: 
         return state;
   }
};

export default transactions;