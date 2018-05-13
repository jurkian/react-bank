import firebase from 'firebase/app';
import 'firebase/auth';
import '@firebase/firestore';

// Initalize and export Firebase.
const config = {
   apiKey: 'AIzaSyBH89-DxQWuo7xVc3zi48h1I6IewVOU0R4',
   authDomain: 'react-bank-f7cc8.firebaseapp.com',
   databaseURL: 'https://react-bank-f7cc8.firebaseio.com',
   projectId: 'react-bank-f7cc8',
   storageBucket: 'react-bank-f7cc8.appspot.com',
   messagingSenderId: '576297099205'
};

firebase.initializeApp(config);

export default firebase;
