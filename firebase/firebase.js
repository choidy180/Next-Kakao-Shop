import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";
import "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCq4AKeNF5n5eafseltQeoPJyolLX_IfYc",
  authDomain: "kakaofriends-d71c3.firebaseapp.com",
  projectId: "kakaofriends-d71c3",
  storageBucket: "kakaofriends-d71c3.appspot.com",
  messagingSenderId: "383246807150",
  appId: "1:383246807150:web:8847e6eb2de6de2896367f",
  measurementId: "G-H6L26KZKBL"
};

export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);

export const dbService = getFirestore();
export const storageService = getStorage();