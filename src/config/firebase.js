import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtkTlaq8qWMUOi0Wywsy9CCSqZpzfXsUs",
  authDomain: "climate-connect-f8bb0.firebaseapp.com",
  projectId: "climate-connect-f8bb0",
  storageBucket: "climate-connect-f8bb0.firebasestorage.app",
  messagingSenderId: "1054837711189",
  appId: "1:1054837711189:web:dfe14608eb6e4d810f4fdc",
  measurementId: "G-6JL7P69RL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);