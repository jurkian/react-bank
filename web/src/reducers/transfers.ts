import * as actionTypes from 'actions/actionTypes';

const initialState = {
   data: [],
   status: true
};

const transfers = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.FETCH_TRANSFERS:
         return {
            ...state,
            data: [...action.data],
            status: true
         };

      case actionTypes.FETCH_TRANSFERS_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actionTypes.ADD_TRANSFER:
         return {
            ...state,
            data: [...state.data, ...action.data]
         };

      default:
         return state;
   }
};

export default transfers;
