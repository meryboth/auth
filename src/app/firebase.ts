// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBujCsMVY1glOWIH6RWC3lzJ3NNTBPcOQY",
  authDomain: "next-auth-username-69b0d.firebaseapp.com",
  projectId: "next-auth-username-69b0d",
  storageBucket: "next-auth-username-69b0d.appspot.com",
  messagingSenderId: "960743944292",
  appId: "1:960743944292:web:70a3a7ef5e4b944f48af71"
};

// Initialize Firebase
const app =  getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth }