// Firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLYO1BUpdArMNpZTA0bGRDW9HNVQzdhow",
  authDomain: "kiteglam-cc70e.firebaseapp.com",
  projectId: "kiteglam-cc70e",
  storageBucket: "kiteglam-cc70e.appspot.com",
  messagingSenderId: "371888440840",
  appId: "1:371888440840:web:4f417c34c5c7902eb6f3bd",
  measurementId: "G-KSJM53G1JH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
