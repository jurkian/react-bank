import * as actionTypes from 'actions/actionTypes';

const initialState = {
   data: [],
   status: true
};

const messages = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.FETCH_MESSAGES:
         return {
            ...state,
            data: [...action.data],
            status: true
         };

      case actionTypes.FETCH_MESSAGES_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actionTypes.MESSAGE_TOGGLE:
         let foundMsgIndex;

         return Object.assign({}, state, {
            data: state.data.map(messagesPage => {
               // Find a place where message should be toggled
               foundMsgIndex = messagesPage.findIndex(msg => msg._id === action._id);

               // Change the toggle
               if (foundMsgIndex >= 0) {
                  messagesPage[foundMsgIndex].isToggled = !messagesPage[foundMsgIndex].isToggled;
               }

               return messagesPage;
            })
         });

      case actionTypes.MESSAGE_REMOVE:
         return Object.assign({}, state, {
            data: state.data.map(messages => messages.filter(msg => msg._id !== action._id))
         });

      default:
         return state;
   }
};

export default messages;
