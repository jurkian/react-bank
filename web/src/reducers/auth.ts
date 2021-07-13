import * as actionTypes from 'actions/actionTypes';

const initialState = {
   status: false
};

const auth = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.SET_AUTH_STATUS:
         return {
            ...state,
            status: action.status
         };

      default:
         return state;
   }
};

export default auth;
