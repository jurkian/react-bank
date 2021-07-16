import { AnyAction } from 'redux';
import * as actionTypes from 'actions/actionTypes';

interface State {
   data: {
      _id: string;
      type: string;
      sortcode: string;
      balance: number;
      currency: string;
   }[];
   status: boolean;
}

const initialState: State = {
   data: [],
   status: true,
};

const accounts = (state = initialState, action: AnyAction) => {
   switch (action.type) {
      case actionTypes.FETCH_ACCOUNTS:
         return {
            ...state,
            data: [...action.data],
            status: true,
         };

      case actionTypes.FETCH_ACCOUNTS_STATUS:
         return {
            ...state,
            status: action.status,
         };

      default:
         return state;
   }
};

export default accounts;
