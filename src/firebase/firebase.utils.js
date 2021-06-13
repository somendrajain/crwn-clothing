import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDoGPVG5vnok4a3BBOkcboHpAv33qXu44o",
    authDomain: "crwn-db-fe4b6.firebaseapp.com",
    projectId: "crwn-db-fe4b6",
    storageBucket: "crwn-db-fe4b6.appspot.com",
    messagingSenderId: "612742583047",
    appId: "1:612742583047:web:affdb1f62dcbdb81062ba2",
    measurementId: "G-3L05TC4F9F"
  };

  
  firebase.initializeApp(config);
  
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

