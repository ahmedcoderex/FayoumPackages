import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAIYXlbaVMDzUuGFo8LGzvQXhM6B1CwjDQ",
  authDomain: "packaging-408b9.firebaseapp.com",
  projectId: "packaging-408b9",
  storageBucket: "packaging-408b9.firebasestorage.app",
  messagingSenderId: "216404445501",
  appId: "1:216404445501:web:b6d5a89f21df5fdc825d54"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)