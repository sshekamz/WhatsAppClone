// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO-8NxtaWMwz0NFnsZAk3n4EW_2JiuKQ4",
  authDomain: "whatsappclone-dfc48.firebaseapp.com",
  projectId: "whatsappclone-dfc48",
  storageBucket: "whatsappclone-dfc48.appspot.com",
  messagingSenderId: "389347349316",
  appId: "1:389347349316:web:ec18204b234448eeb9bd11",
  measurementId: "G-LHGMGVNC3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth =getAuth(app);