import firebase from './index';

const db = firebase.firestore();

let userId = '';
let accIds = [];
const initialData = {
   user: {},
   accounts: [],
   cards: [],
   transactions: [],
   messages: []
};

// Fetching data for all the sections
// user data, accounts, cards, transactions, messages

// Users
const users = email =>
   new Promise((resolve, reject) => {
      db
         .collection('users')
         .where('email', '==', email)
         .limit(1)
         .get()
         .then(data => {
            // User data
            initialData.user = data.docs[0].data();
            initialData.user.id = data.docs[0].id;
            userId = data.docs[0].id;

            resolve();
         })
         .catch(err => reject(err));
   });

// Accounts
const accounts = () =>
   new Promise(resolve => {
      db
         .collection('accounts')
         .where('user_id', '==', userId)
         .limit(10)
         .get()
         .then(accounts => {
            // Get accounts data
            initialData.accounts = accounts.docs.map(doc => {
               accIds.push(doc.id);

               return {
                  ...doc.data(),
                  id: doc.id
               };
            });
         })
         .then(() => {
            for (const accId of accIds) {
               // Transactions (we need account IDs)
               db
                  .collection('transactions')
                  .where('source_acc_id', '==', accId)
                  .limit(10)
                  .get()
                  .then(transactions => {
                     // Get transactions
                     initialData.transactions = transactions.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id
                     }));
                  });

               // Cards (we need account IDs)
               db
                  .collection('cards')
                  .where('user_id', '==', userId)
                  .limit(10)
                  .get()
                  .then(cards => {
                     // Get cards
                     initialData.cards = cards.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id
                     }));
                  });
            }

            resolve();
         });
   });

// Messages
const messages = () =>
   new Promise(resolve => {
      db
         .collection('messages')
         .where('user_id', '==', userId)
         .limit(10)
         .get()
         .then(messages => {
            // Get messages
            initialData.messages = messages.docs.map(doc => ({
               ...doc.data(),
               id: doc.id
            }));

            resolve();
         });
   });

// Return Promise with initialData
export default email =>
   users(email)
      .then(accounts)
      .then(messages)
      .then(() => initialData);
