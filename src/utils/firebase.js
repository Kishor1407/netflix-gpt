// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAWdslWqgvJzwojvED1gtyKjaRmHG_gBw",
  authDomain: "netflixgpt-88ebb.firebaseapp.com",
  projectId: "netflixgpt-88ebb",
  storageBucket: "netflixgpt-88ebb.firebasestorage.app",
  messagingSenderId: "460718945922",
  appId: "1:460718945922:web:2b3aa7f9de83b55b1ee69b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();