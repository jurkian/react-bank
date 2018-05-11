import * as actionTypes from 'actions/actionTypes';

const initialState = {
   userData: '',
   accounts: [],
   cards: [],
   transactions: [],
   messages: []
};

const user = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.SET_USER_INITIAL_DATA:
         return action.data;

      default:
         return state;
   }
};

export default user;
