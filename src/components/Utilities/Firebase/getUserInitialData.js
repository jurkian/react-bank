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
   new Promise(resolve => {
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
         });
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
            let accData;

            // Get accounts data
            accounts.docs.forEach(doc => {
               accIds.push(doc.id);

               accData = doc.data();
               accData.id = doc.id;
               delete accData.user_id;

               initialData.accounts[doc.id] = accData;
            });
         })
         .then(() => {
            accIds.forEach(accId => {
               let transData;
               let cardsData;

               // Transactions (we need account IDs)
               db
                  .collection('transactions')
                  .where('source_acc_id', '==', accId)
                  .limit(10)
                  .get()
                  .then(transactions => {
                     // Get transactions
                     transactions.docs.forEach(doc => {
                        transData = doc.data();
                        transData.id = doc.id;
                        initialData.transactions[doc.id] = transData;
                     });
                  });

               // Cards (we need account IDs)
               db
                  .collection('cards')
                  .where('source_acc_id', '==', accId)
                  .limit(10)
                  .get()
                  .then(cards => {
                     // Get cards
                     cards.docs.forEach(doc => {
                        cardsData = doc.data();
                        cardsData.id = doc.id;
                        initialData.cards[doc.id] = cardsData;
                     });
                  });
            });

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
            let messagesData;

            // Get messages
            messages.forEach(doc => {
               messagesData = doc.data();
               messagesData.id = doc.id;
               delete messagesData.user_id;

               initialData.messages[doc.id] = messagesData;
            });

            resolve();
         });
   });

// Return Promise with initialData
export default email =>
   users(email)
      .then(accounts)
      .then(messages)
      .then(() => initialData);
