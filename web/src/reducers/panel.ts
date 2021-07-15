import { AnyAction } from 'redux';
import * as actionTypes from 'actions/actionTypes';

interface State {
   initialDataStatus: boolean;
}

const initialState: State = {
   initialDataStatus: true,
};

const panel = (state = initialState, action: AnyAction) => {
   switch (action.type) {
      case actionTypes.FETCH_INITIAL_DATA_STATUS:
         return {
            ...state,
            initialDataStatus: action.status,
         };

      default:
         return state;
   }
};

export default panel;
