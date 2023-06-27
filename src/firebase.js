// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8jacqQhbTnNor1oaKvHKA4HSFFI4JL2w",
  authDomain: "react-disneyapp.firebaseapp.com",
  projectId: "react-disneyapp",
  storageBucket: "react-disneyapp.appspot.com",
  messagingSenderId: "349613571608",
  appId: "1:349613571608:web:31f6fd16d6cd91f8c60d6d",
  measurementId: "G-H5V74DN63V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
