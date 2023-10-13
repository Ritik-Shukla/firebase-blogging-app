import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDzJqC1AnyRM-MLFgcmSrbmnPcbcNH3nT4",
  authDomain: "blogging-app-4358f.firebaseapp.com",
  projectId: "blogging-app-4358f",
  storageBucket: "blogging-app-4358f.appspot.com",
  messagingSenderId: "619596907361",
  appId: "1:619596907361:web:5606dd6553aadf68bf7b20"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
