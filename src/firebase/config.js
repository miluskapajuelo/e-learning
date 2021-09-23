import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
// Initialize firebase services
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAOk-hqj6FXKtjf912IsevXTbvp_rWR9i0',
  authDomain: 'e-learning-konecta.firebaseapp.com',
  projectId: 'e-learning-konecta',
  storageBucket: 'e-learning-konecta.appspot.com',
  messagingSenderId: '418345096115',
  appId: '1:418345096115:web:414d43d4f006c3fab5b1c6',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const fs = firebase.firestore();
const storage = firebase.storage();
export { fs, storage };
