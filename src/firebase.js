// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8UPuNA_stRMMbiW7ZSI8lwOAVd-x7rrY",
  authDomain: "pingho-ac5fa.firebaseapp.com",
  databaseURL: "https://pingho-ac5fa-default-rtdb.firebaseio.com",
  projectId: "pingho-ac5fa",
  storageBucket: "pingho-ac5fa.appspot.com",
  messagingSenderId: "847721360886",
  appId: "1:847721360886:web:6196cd3291811f124d6bd7",
  measurementId: "G-VVRW3RDLZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);