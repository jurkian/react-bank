import { AnyAction } from 'redux';
import * as actionTypes from 'actions/actionTypes';

interface State {
   data: {}[];
   status: boolean;
}

const initialState: State = {
   data: [],
   status: true,
};

const transfers = (state = initialState, action: AnyAction) => {
   switch (action.type) {
      case actionTypes.FETCH_TRANSFERS:
         return {
            ...state,
            data: [...action.data],
            status: true,
         };

      case actionTypes.FETCH_TRANSFERS_STATUS:
         return {
            ...state,
            status: action.status,
         };

      case actionTypes.ADD_TRANSFER:
         return {
            ...state,
            data: [...state.data, ...action.data],
         };

      default:
         return state;
   }
};

export default transfers;
