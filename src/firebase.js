import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCDChSv9I8nAy5-fpGIWQVCXLQd5-UYrAY",
  authDomain: "react-chat-e208d.firebaseapp.com",
  projectId: "react-chat-e208d",
  storageBucket: "react-chat-e208d.appspot.com",
  messagingSenderId: "597696346783",
  appId: "1:597696346783:web:13a438530584eaf6b000aa"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();