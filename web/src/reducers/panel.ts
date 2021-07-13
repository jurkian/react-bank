import * as actionTypes from 'actions/actionTypes';

const initialState = {
   initialDataStatus: false
};

const panel = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.FETCH_INITIAL_DATA_STATUS:
         return {
            ...state,
            initialDataStatus: action.status
         };

      default:
         return state;
   }
};

export default panel;
