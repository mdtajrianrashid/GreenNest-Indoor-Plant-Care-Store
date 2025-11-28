// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzgdDjlXd7WcbVcxOflNs0rureVbeyJ8g",
  authDomain: "greennest-plant-store.firebaseapp.com",
  projectId: "greennest-plant-store",
  storageBucket: "greennest-plant-store.firebasestorage.app",
  messagingSenderId: "547397236967",
  appId: "1:547397236967:web:eebed80821aa81f04e4a42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();