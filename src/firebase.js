// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9OvSeTT_mOSr83gtQPPQu6lKKBkPVe1A",
  authDomain: "movie-a69ae.firebaseapp.com",
  projectId: "movie-a69ae",
  storageBucket: "movie-a69ae.appspot.com",
  messagingSenderId: "91342214803",
  appId: "1:91342214803:web:4ec0829bc09feb590a1f66"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);











