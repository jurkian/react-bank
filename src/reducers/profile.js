import {
   FETCH_PROFILE,
   FETCH_PROFILE_STATUS,
   PROFILE_CHANGE_DETAILS
} from 'actions/profile';

const initialState = {
   data: [],
   status: false
};

const profile = (state = initialState, action) => {
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

      case PROFILE_CHANGE_DETAILS:
         return;

      default: 
         return state;
   }
};

export default profile;