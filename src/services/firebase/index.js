// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuARt3zAzeNZtwinNpib6blLUKao2BGXQ",
  authDomain: "allgamer-94662.firebaseapp.com",
  projectId: "allgamer-94662",
  storageBucket: "allgamer-94662.appspot.com",
  messagingSenderId: "682377437883",
  appId: "1:682377437883:web:6e5fe314e24f91c718bf9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const collectionsName = {
  productos: 'productos',
  ordenes: 'ordenes'
}