// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD31sWq3Lae9p4NLyV-1y7YcTOZvJTkV_8",
  authDomain: "foood-food.firebaseapp.com",
  projectId: "foood-food",
  storageBucket: "foood-food.appspot.com",
  messagingSenderId: "737481027189",
  appId: "1:737481027189:web:7faeca9cb685e019b2523c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;