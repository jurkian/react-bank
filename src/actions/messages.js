import axios from 'axios';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const FETCH_MESSAGES_STATUS = 'FETCH_MESSAGES_STATUS';
export const MESSAGE_TOGGLE_READ = 'MESSAGE_TOGGLE_READ';

export function fetchMessages() {
   return function (dispatch) {
      axios.get('http://localhost:3001/messages')
      .then(res => res.data)
      .then(data => {
         dispatch({ type: FETCH_MESSAGES, data });
         dispatch(fetchMessagesStatus(true));
      })
      .catch(error => {
         dispatch(fetchMessagesStatus(0));
      });
   }
}

export function fetchMessagesStatus(status) {
   return {
      type: FETCH_MESSAGES_STATUS,
      status
   }
}

export function messageToggleRead(id) {
   return {
      type: MESSAGE_TOGGLE_READ,
      id
   }
}