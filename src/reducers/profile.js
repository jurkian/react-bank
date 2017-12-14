import {
   FETCH_PROFILE,
   FETCH_PROFILE_STATUS,
   USER_CHANGE_DETAILS,
   USER_CHANGE_DETAILS_STATUS
} from 'actions/profile';

const initialState = {
   data: [],
   status: false,
   validations: []
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
         // currentUser.password_hash = action.newPassword; // TODO: hash it!
         currentUser.email = action.newEmail;

         return {
            ...state
         }

      case USER_CHANGE_DETAILS_STATUS:
         return {
            ...state,
            validations: {
               ...state.validations,
               changeDetails: action.status
            }
         };

      default: 
         return state;
   }
};

export default profile;