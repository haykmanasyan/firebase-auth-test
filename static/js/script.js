// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwc0xzQpCRf8PSpWxGUOOygarMnZnZ8CY",
  authDomain: "test-9e968.firebaseapp.com",
  projectId: "test-9e968",
  storageBucket: "test-9e968.appspot.com",
  messagingSenderId: "417393271951",
  appId: "1:417393271951:web:ee22171c0c7e079239bcfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);
