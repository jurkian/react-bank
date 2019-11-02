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
      })
      .catch(err => err);

// Accounts
const accounts = () =>
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
      });

// Transactions (we will need account IDs - in the future!)
const transactions = () =>
   db
      .collection('transactions')
      .limit(10)
      .get()
      .then(transactions => {
         // Get transactions
         initialData.transactions = transactions.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
         }));
      });

// Cards (we need user ID)
const cards = () =>
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

// Messages
const messages = () =>
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
      });

// Return Promise with initialData
export default email =>
   users(email)
      .then(accounts)
      .then(transactions)
      .then(cards)
      .then(messages)
      .then(() => initialData);
