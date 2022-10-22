// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGtZddBiJMLnwM4OCtOOUuAEbtM4kj4HA",
  authDomain: "dragon-news-fac93.firebaseapp.com",
  projectId: "dragon-news-fac93",
  storageBucket: "dragon-news-fac93.appspot.com",
  messagingSenderId: "695089640713",
  appId: "1:695089640713:web:a13c60ee6167b7bc63cfd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;