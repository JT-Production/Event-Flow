// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm0xadG8ZtvT9LUE3qUx7nr3e4FuvUx7s",
  authDomain: "eventflow-v1.firebaseapp.com",
  projectId: "eventflow-v1",
  storageBucket: "eventflow-v1.firebasestorage.app",
  messagingSenderId: "7198826102",
  appId: "1:7198826102:web:1c39ba7cdd3b5d42eb4957",
  measurementId: "G-49D0H8EP9G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);