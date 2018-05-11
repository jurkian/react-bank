import axios from 'axios';
import * as actionTypes from './actionTypes';
import firebase from 'components/Utilities/Firebase';

const db = firebase.firestore();

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
               dispatch({ type: actionTypes.FETCH_MESSAGES, data, page });
               resolve(data);
            })
            .catch(err => reject(err));
      });
}

export function fetchMessagesStatus(status) {
   return {
      type: actionTypes.FETCH_MESSAGES_STATUS,
      status
   };
}

export function messageToggle(id, isToggled) {
   return dispatch => {
      db
         .collection('messages')
         .doc(id)
         .update({ isToggled })
         .then(() => dispatch({ type: actionTypes.MESSAGE_TOGGLE, id }))
         .catch(error => {});
   };
}

export function messageRemove(id) {
   return dispatch => {
      db
         .collection('messages')
         .doc(id)
         .delete()
         .then(() => dispatch({ type: actionTypes.MESSAGE_REMOVE, id }))
         .catch(error => {});
   };
}

// Pagination
export function fetchMessagesPaginationStatus(status) {
   return {
      type: actionTypes.FETCH_MESSAGES_PAGINATION_STATUS,
      status
   };
}

export function setMessagesPage(pageNumber) {
   return dispatch =>
      new Promise((resolve, reject) => {
         dispatch({
            type: actionTypes.SET_MESSAGES_PAGE,
            pageNumber
         });

         resolve();
      });
}
