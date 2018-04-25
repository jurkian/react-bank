import * as actions from 'actions/profile';

const initialState = {
   data: [],
   status: false
};

const profile = (state = initialState, action) => {
   switch (action.type) {
      case actions.FETCH_PROFILE:
         return {
            ...state,
            data: [...action.data]
         };

      case actions.FETCH_PROFILE_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actions.USER_CHANGE_DETAILS:
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
