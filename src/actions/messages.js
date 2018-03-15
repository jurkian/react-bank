import axios from 'axios';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const FETCH_MESSAGES_STATUS = 'FETCH_MESSAGES_STATUS';
export const MESSAGE_TOGGLE = 'MESSAGE_TOGGLE';
export const MESSAGE_REMOVE = 'MESSAGE_REMOVE';

export function fetchMessages() {
   return dispatch => {
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

export function messageToggle(id, isToggled) {
   return dispatch => {
      axios(`http://localhost:3001/messages/${id}`, {
         method: 'patch',
         headers: { 'Content-Type': 'application/json' },
         data: { isToggled }
      })
         .then(res => res.data)
         .then(data => dispatch({ type: MESSAGE_TOGGLE, id }))
         .catch(error => {});
   }
}

export function messageRemove(id) {
   return dispatch => {
      axios(`http://localhost:3001/messages/${id}`, {
         method: 'delete',
         headers: { 'Content-Type': 'application/json' }
      })
         .then(res => res.data)
         .then(data => dispatch({ type: MESSAGE_REMOVE, id }))
         .catch(error => {});
   }
}