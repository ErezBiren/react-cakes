import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrq16ohJFuDuMhFDQt9cOgNHuisQyfgAc",
  authDomain: "cakes-75551.firebaseapp.com",
  projectId: "cakes-75551",
  storageBucket: "cakes-75551.appspot.com",
  messagingSenderId: "835193487301",
  appId: "1:835193487301:web:1788ddc7861a7fda2295ac",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
