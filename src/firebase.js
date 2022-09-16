import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8CdL8Y3GljwZ5F7SyjzcPf7WwFcp6-64",
    authDomain: "tinder-clone-ebd72.firebaseapp.com",
    projectId: "tinder-clone-ebd72",
    storageBucket: "tinder-clone-ebd72.appspot.com",
    messagingSenderId: "75664066503",
    appId: "1:75664066503:web:ddd8b5575617fdc6d4fbe2",
    measurementId: "G-5XNHKPB1PQ"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
export { db, storage };