import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrRAWZfTe4UyQ7XbzTT6IRkHHMS2RgPfQ",
  authDomain: "saikai-156cf.firebaseapp.com",
  projectId: "saikai-156cf",
  storageBucket: "saikai-156cf.appspot.com",
  messagingSenderId: "30978760579",
  appId: "1:30978760579:web:caeb902d11165c07ede0b6",
  measurementId: "G-J4F6WP8KFP",
};

export const app = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export default { db, auth };
