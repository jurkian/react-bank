import * as actionTypes from 'actions/actionTypes';

const initialState = {
   data: {},
   status: true
};

const profile = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.FETCH_PROFILE:
         return {
            ...state,
            data: { ...action.data },
            status: true
         };

      case actionTypes.FETCH_PROFILE_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actionTypes.USER_CHANGE_DETAILS:
         const currentUser = [...state.data].find(el => el.id === action.id);

         if (action.email) {
            currentUser.email = action.newEmail;
         }

         if (action.password) {
            currentUser.password = action.password;
         }

         return {
            ...state,
            data: [...state.data, currentUser]
         };

      default:
         return state;
   }
};

export default profile;
