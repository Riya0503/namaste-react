// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdny_rd2YrovRdhV7-4ySb6geice8wnCA",
  authDomain: "netflixgtp-689eb.firebaseapp.com",
  projectId: "netflixgtp-689eb",
  storageBucket: "netflixgtp-689eb.firebasestorage.app",
  messagingSenderId: "299987164896",
  appId: "1:299987164896:web:fca6f6d2b8a96f62fefa85",
  measurementId: "G-4NRWBDC8VP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();