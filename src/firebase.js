import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdOWJIc8OXOgpXdfy4gTiYt3-VUpSivsI",
  authDomain: "chats-4acc9.firebaseapp.com",
  projectId: "chats-4acc9",
  storageBucket: "chats-4acc9.appspot.com",
  messagingSenderId: "891515902498",
  appId: "1:891515902498:web:1b7c1053d4bb4a2f19487b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
