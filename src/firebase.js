// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy6cxqx2WqZzvSoKmUHz-QBV6kpwrnfNM",
  authDomain: "first-project-1e9c1.firebaseapp.com",
  projectId: "first-project-1e9c1",
  storageBucket: "first-project-1e9c1.appspot.com",
  messagingSenderId: "709621582671",
  appId: "1:709621582671:web:47821758094eafc5f3133a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)