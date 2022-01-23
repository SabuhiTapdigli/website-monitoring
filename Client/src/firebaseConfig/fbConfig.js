import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });
const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKECT,
  MESSAGING_SENDER_ID,
  APP_ID
} = process.env

const firebaseConfig = {
    apiKey:API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKECT,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  export const auth = firebase.auth()
export default db