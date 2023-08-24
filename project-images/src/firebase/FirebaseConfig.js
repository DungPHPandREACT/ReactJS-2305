// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZCU5P9nZWAv4Jl7bxuxoO3BmHAMXyHS8",
  authDomain: "project-images-d8ce8.firebaseapp.com",
  projectId: "project-images-d8ce8",
  storageBucket: "project-images-d8ce8.appspot.com",
  messagingSenderId: "1015229420227",
  appId: "1:1015229420227:web:816f66c80bc7bfcff50876",
  measurementId: "G-0WH1R52586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);