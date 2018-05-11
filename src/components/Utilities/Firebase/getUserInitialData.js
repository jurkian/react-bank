import firebase from './index';

const db = firebase.firestore();

let userId = '';
let accIds = [];
const initialData = {
   userData: '',
   accounts: [],
   cards: [],
   transactions: [],
   messages: []
};

// Fetching data for all the sections
// user data, accounts, cards, transactions, messages

// Users
const users = db
   .collection('users')
   .where('email', '==', 'email@example.com')
   .limit(1)
   .get()
   .then(data => {
      // User data
      initialData.user = data.docs[0].data();
      userId = data.docs[0].id;
   });

// Accounts
const accounts = () =>
   db
      .collection('accounts')
      .where('user_id', '==', userId)
      .limit(10)
      .get()
      .then(accounts => {
         // Get accounts IDs
         accounts.docs.forEach(doc => accIds.push(doc.id));

         // Get accounts data
         accounts.forEach(acc => initialData.accounts.push(acc.data()));
      })
      .then(() => {
         accIds.forEach(accId => {
            // Transactions (we need account IDs)
            db
               .collection('transactions')
               .where('source_acc_id', '==', accId)
               .limit(10)
               .get()
               .then(transactions => {
                  // Get transactions
                  transactions.forEach(trans => initialData.transactions.push(trans.data()));
               });

            // Cards (we need account IDs)
            db
               .collection('cards')
               .where('source_acc_id', '==', accId)
               .limit(10)
               .get()
               .then(cards => {
                  // Get cards
                  cards.forEach(card => initialData.cards.push(card.data()));
               });
         });
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
         messages.forEach(message => initialData.messages.push(message.data()));
      });

// Return Promise with initialData
export default users
   .then(accounts)
   .then(messages)
   .then(() => initialData);
