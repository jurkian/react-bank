import * as actionTypes from 'actions/actionTypes';

const initialState = {
   data: [],
   status: true
};

const accounts = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.FETCH_ACCOUNTS:
         return {
            ...state,
            data: [...action.data],
            status: true
         };

      case actionTypes.FETCH_ACCOUNTS_STATUS:
         return {
            ...state,
            status: action.status
         };

      default:
         return state;
   }
};

export default accounts;
