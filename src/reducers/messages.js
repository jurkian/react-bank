import {
   FETCH_MESSAGES,
   FETCH_MESSAGES_STATUS,
   MESSAGE_TOGGLE,
   MESSAGE_REMOVE
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

      case MESSAGE_TOGGLE:
         return Object.assign({}, state, {
            data: state.data.map(message => {
               if (message.id !== action.id) {
                  return message;
               }

               return Object.assign({}, message, {
                  isToggled: !message.isToggled
               })
            })
         });

      case MESSAGE_REMOVE:
         return Object.assign({}, state, {
            data: state.data.filter((message) => message.id !== action.id)
         });

      default:
         return state;
   }
};

export default messages;