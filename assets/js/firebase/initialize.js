// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { getStorage, ref, getDownloadURL, listAll, getMetadata } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-storage.js";
import {  getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT6BViuD1HQdnzzRnvd0CZo2N0SU07LtM",
  authDomain: "sublair-a2ded.firebaseapp.com",
  projectId: "sublair-a2ded",
  storageBucket: "sublair-a2ded.appspot.com",
  messagingSenderId: "652616157969",
  appId: "1:652616157969:web:9cb1ec1a88b3ce4dfb5ab0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export {app}




