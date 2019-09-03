import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB9NMJkkM5BmXrfS13sEL4MVeBKCSJlVZs",
  authDomain: "crwn-db-17199.firebaseapp.com",
  databaseURL: "https://crwn-db-17199.firebaseio.com",
  projectId: "crwn-db-17199",
  storageBucket: "",
  messagingSenderId: "979851153325",
  appId: "1:979851153325:web:677e55011dc804c2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;