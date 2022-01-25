import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAfVtt3kEdz-P7ckwjZyYsHzHnxG23G0n4",
  authDomain: "website-monitoring-d3b6a.firebaseapp.com",
  projectId: "website-monitoring-d3b6a",
  storageBucket: "website-monitoring-d3b6a.appspot.com",
  messagingSenderId: "863899681787",
  appId: "1:863899681787:web:dc4be2b610a1eca125815e"
};
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  export const auth = firebase.auth()
export default db