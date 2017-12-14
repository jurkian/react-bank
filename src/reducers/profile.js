import {
   FETCH_PROFILE,
   FETCH_PROFILE_STATUS
} from 'actions/profile';

const initialState = {
   data: [],
   status: false,
   validations: []
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

      default: 
         return state;
   }
};

export default profile;