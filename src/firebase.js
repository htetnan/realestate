// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr8IjgIa7ELiv3x_LJ4EttDu6-CATkZu0",
  authDomain: "estate-project-a7271.firebaseapp.com",
  projectId: "estate-project-a7271",
  storageBucket: "estate-project-a7271.appspot.com",
  messagingSenderId: "670803142618",
  appId: "1:670803142618:web:7f653794cb52bfa58542e3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()