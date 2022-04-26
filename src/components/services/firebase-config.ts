import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyD_rFDE0rB-YhSMzd258xMdYcDMlcQrjzc",
    authDomain: "barber-1ed55.firebaseapp.com",
    projectId: "barber-1ed55",
    storageBucket: "barber-1ed55.appspot.com",
    messagingSenderId: "820738296626",
    appId: "1:820738296626:web:7c7ce24e6c5d43c0e7a52b",
    measurementId: "G-DQ9GZTKL7V"
  };

  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

  export const auth = getAuth(app);