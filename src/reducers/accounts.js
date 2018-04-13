import * as actions from 'actions/accounts';

const initialState = {
   data: [],
   status: false
};

const accounts = (state = initialState, action) => {
   switch (action.type) {

      case actions.FETCH_ACCOUNTS:
         return {
            ...state,
            data: [...action.data]
         }

      case actions.FETCH_ACCOUNTS_STATUS:
         return {
            ...state,
            status: action.status
         }

      default:
         return state;
   }
};

export default accounts;