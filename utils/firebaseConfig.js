// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsgfYq59m8t1RYHKmzDZfQ-tUIgMDVz0E",
  authDomain: "myportfolio-daa7e.firebaseapp.com",
  databaseURL:
    "https://myportfolio-daa7e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myportfolio-daa7e",
  storageBucket: "myportfolio-daa7e.appspot.com", // Fixed storageBucket
  messagingSenderId: "257901087426",
  appId: "1:257901087426:web:eb52635db98b08dce5c95b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get };


