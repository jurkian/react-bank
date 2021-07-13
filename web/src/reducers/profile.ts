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

      default:
         return state;
   }
};

export default profile;
