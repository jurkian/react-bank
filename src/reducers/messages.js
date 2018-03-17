import {
   FETCH_MESSAGES,
   FETCH_MESSAGES_STATUS,
   FETCH_PAGINATION_STATUS,
   MESSAGE_TOGGLE,
   MESSAGE_REMOVE,
   SET_MESSAGES_PAGE
} from 'actions/messages';

const initialState = {
   data: [],
   status: false,
   paginationStatus: false,
   pageNumber: 1
};

const messages = (state = initialState, action) => {
   switch (action.type) {

      case FETCH_MESSAGES:
         const data = state.data;

         // -1, because pages start from 1
         data[action.page - 1] = action.data;

         return {
            ...state,
            data
         };

      case FETCH_MESSAGES_STATUS:
         return {
            ...state,
            status: action.status
         }

      case FETCH_PAGINATION_STATUS:
         return {
            ...state,
            paginationStatus: action.status
         }

      case MESSAGE_TOGGLE:
         let foundMessage;

         return Object.assign({}, state, {
            data: state.data.map(pageMessages => {

               // Find a place where message should be toggled
               foundMessage = pageMessages.find(message => message.id === action.id);

               // Change the toggle
               if (foundMessage) {
                  foundMessage.isToggled = !foundMessage.isToggled;
               }

               return pageMessages;
            })
         });

      case MESSAGE_REMOVE:
         return Object.assign({}, state, {
            data: state.data.map(pageMessages => {

               // Remove the message
               pageMessages = pageMessages.filter(message => message.id !== action.id);
               return pageMessages;
            })
         });

      case SET_MESSAGES_PAGE:
         return {
            ...state,
            pageNumber: action.pageNumber
         }

      default:
         return state;
   }
};

export default messages;