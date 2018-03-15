import {
   FETCH_PROFILE,
   FETCH_PROFILE_STATUS,
   USER_CHANGE_DETAILS
} from 'actions/profile';

const initialState = {
   data: [],
   status: false
};

const profile = (state = initialState, action) => {
   let currentUser;

   switch (action.type) {

      case FETCH_PROFILE:
         return {
            ...state,
            data: [...action.data]
         }

      case FETCH_PROFILE_STATUS:
         return {
            ...state,
            status: action.status
         }

      case USER_CHANGE_DETAILS:
         currentUser = state.data.find(el => el.id === action.id);

         if (action.email) {
            currentUser.email = action.newEmail;
         }

         if (action.password) {
            currentUser.password = action.password;
         }

         return {
            ...state
         }

      default: 
         return state;
   }
};

export default profile;