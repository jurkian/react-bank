import * as actions from 'actions/messages';

const initialState = {
   data: [],
   status: false,
   paginationStatus: false,
   pageNumber: 1
};

const messages = (state = initialState, action) => {
   switch (action.type) {

      case actions.FETCH_MESSAGES:
         const messagesData = [...state.data];

         // -1, because pages start from 1
         messagesData[action.page - 1] = action.data;

         return {
            ...state,
            data: messagesData
         };

      case actions.FETCH_MESSAGES_STATUS:
         return {
            ...state,
            status: action.status
         }

      case actions.FETCH_PAGINATION_STATUS:
         return {
            ...state,
            paginationStatus: action.status
         }

      case actions.MESSAGE_TOGGLE:
         let foundMsgIndex;

         return Object.assign({}, state, {
            data: state.data.map(messages => {

               // Find a place where message should be toggled
               foundMsgIndex = messages.findIndex(msg => msg.id === action.id);

               // Change the toggle
               if (foundMsgIndex) {
                  messages[foundMsgIndex].isToggled = !messages[foundMsgIndex].isToggled;
               }

               return messages;
            })
         });

      case actions.MESSAGE_REMOVE:
         return Object.assign({}, state, {
            data: state.data.map(messages => messages.filter(msg => msg.id !== action.id))
         });

      case actions.SET_MESSAGES_PAGE:
         return {
            ...state,
            pageNumber: action.pageNumber
         }

      default:
         return state;
   }
};

export default messages;