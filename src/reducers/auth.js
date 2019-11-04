import * as actionTypes from 'actions/actionTypes';

const initialState = {
   status: false,
   userEmail: null
};

const auth = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.SET_AUTH_STATUS:
         return Object.assign({}, state, {
            status: action.status,
            userEmail: action.email
         });

      default:
         return state;
   }
};

export default auth;
