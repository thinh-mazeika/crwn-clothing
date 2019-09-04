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

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
  
    try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additonalData
    })
  } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;