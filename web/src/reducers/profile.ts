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

const profile = (state = initialState, action: AnyAction) => {
   switch (action.type) {
      case actionTypes.FETCH_PROFILE:
         return {
            ...state,
            data: { ...action.data },
            status: true,
         };

      case actionTypes.FETCH_PROFILE_STATUS:
         return {
            ...state,
            status: action.status,
         };

      default:
         return state;
   }
};

export default profile;
