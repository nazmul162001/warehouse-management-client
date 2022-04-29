import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBxhmiOwgiGVgMtI2XETt-GKlMcKqcwwsU",
  authDomain: "foodie-store-6b0b2.firebaseapp.com",
  projectId: "foodie-store-6b0b2",
  storageBucket: "foodie-store-6b0b2.appspot.com",
  messagingSenderId: "667922246696",
  appId: "1:667922246696:web:b2dfdef30695e3c38f991d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


