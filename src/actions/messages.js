import axios from 'axios';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const FETCH_MESSAGES_STATUS = 'FETCH_MESSAGES_STATUS';
export const FETCH_PAGINATION_STATUS = 'FETCH_PAGINATION_STATUS';
export const MESSAGE_TOGGLE = 'MESSAGE_TOGGLE';
export const MESSAGE_REMOVE = 'MESSAGE_REMOVE';
export const SET_MESSAGES_PAGE = 'SET_MESSAGES_PAGE';

export function fetchMessages(page = 1, perPage = 8) {
   const fetchUrl = `/messages?_page=${page}&_limit=${perPage}`;

   return dispatch =>
      new Promise((resolve, reject) => {
         // Set status to false on every start, so it can be reusable
         dispatch(fetchMessagesStatus(false));

         axios
            .get(fetchUrl)
            .then(res => res.data)
            .then(data => {
               dispatch({ type: FETCH_MESSAGES, data, page });
               dispatch(fetchMessagesStatus(true));
               resolve(data);
            })
            .catch(err => reject(err));
      });
}

export function fetchMessagesStatus(status) {
   return {
      type: FETCH_MESSAGES_STATUS,
      status
   };
}

export function setFetchPaginationStatus(status) {
   return {
      type: FETCH_PAGINATION_STATUS,
      status
   };
}

export function messageToggle(id, isToggled) {
   return dispatch => {
      axios(`/messages/${id}`, {
         method: 'patch',
         headers: { 'Content-Type': 'application/json' },
         data: { isToggled }
      })
         .then(res => res.data)
         .then(data => dispatch({ type: MESSAGE_TOGGLE, id }))
         .catch(error => {});
   };
}

export function messageRemove(id) {
   return dispatch => {
      axios(`/messages/${id}`, {
         method: 'delete',
         headers: { 'Content-Type': 'application/json' }
      })
         .then(res => res.data)
         .then(data => dispatch({ type: MESSAGE_REMOVE, id }))
         .catch(error => {});
   };
}

export function setMessagesPage(pageNumber) {
   return dispatch =>
      new Promise((resolve, reject) => {
         dispatch({
            type: SET_MESSAGES_PAGE,
            pageNumber
         });

         resolve();
      });
}
