
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

 const firebaseConfig = {
  apiKey: "AIzaSyAuARt3zAzeNZtwinNpib6blLUKao2BGXQ",
  authDomain: "allgamer-94662.firebaseapp.com",
  projectId: "allgamer-94662",
  storageBucket: "allgamer-94662.appspot.com",
  messagingSenderId: "682377437883",
  appId: "1:682377437883:web:6e5fe314e24f91c718bf9e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 

