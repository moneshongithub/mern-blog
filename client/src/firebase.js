// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7544f.firebaseapp.com",
  projectId: "mern-blog-7544f",
  storageBucket: "mern-blog-7544f.appspot.com",
  messagingSenderId: "452579288347",
  appId: "1:452579288347:web:9d8918697cacf84da51fbe",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
