import {
   FETCH_MESSAGES,
   FETCH_MESSAGES_STATUS,
   MESSAGE_TOGGLE_READ
} from 'actions/messages';

const initialState = {
   data: [],
   status: false
};

const messages = (state = initialState, action) => {
   switch (action.type) {

      case FETCH_MESSAGES:
         return {
            ...state,
            data: [...action.data]
         }

      case FETCH_MESSAGES_STATUS:
         return {
            ...state,
            status: action.status
         }

      case MESSAGE_TOGGLE_READ:
         return state;

      default: 
         return state;
   }
};

export default messages;