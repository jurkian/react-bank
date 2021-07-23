import { AnyAction } from 'redux';
import * as actionTypes from 'actions/actionTypes';

interface State {
   status: boolean;
}

const initialState: State = {
   status: true,
};

const auth = (state = initialState, action: AnyAction) => {
   switch (action.type) {
      case actionTypes.SET_AUTH_STATUS:
         return {
            ...state,
            status: action.status,
         };

      default:
         return state;
   }
};

export default auth;
