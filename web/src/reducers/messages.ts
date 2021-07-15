import { AnyAction } from 'redux';
import * as actionTypes from 'actions/actionTypes';

interface State {
   data: {
      _id: string;
      isRead: boolean;
   }[];
   status: boolean;
}

const initialState: State = {
   data: [],
   status: true,
};

const messages = (state = initialState, action: AnyAction) => {
   if (action.type === actionTypes.FETCH_MESSAGES) {
      return {
         ...state,
         data: [...action.data],
         status: true,
      };
   }

   if (action.type === actionTypes.FETCH_MESSAGES_STATUS) {
      return {
         ...state,
         status: action.status,
      };
   }

   if (action.type === actionTypes.MESSAGE_TOGGLE) {
      const data = state.data;
      const foundMsg = data.find((msg) => msg._id === action.id);

      if (!foundMsg) return state;

      foundMsg.isRead = !foundMsg.isRead;

      return {
         ...state,
         data: [...data],
      };
   }

   if (action.type === actionTypes.MESSAGE_REMOVE) {
      const data = state.data.filter((msg) => msg._id !== action.id);

      return {
         ...state,
         data: [...data],
      };
   }

   return state;
};

export default messages;
