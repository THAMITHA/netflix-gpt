// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBymks5_ex5ZrIu_0wrrLK1iE-0azjiq28",
  authDomain: "netflixgpt-87b94.firebaseapp.com",
  projectId: "netflixgpt-87b94",
  storageBucket: "netflixgpt-87b94.firebasestorage.app",
  messagingSenderId: "734872790099",
  appId: "1:734872790099:web:49766dfa4e2116055d92a6",
  measurementId: "G-P58BWWVP2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()