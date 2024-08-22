import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCthgbfZRMLeuCZTnCBQOgblzn9GhJnIqI",
  authDomain: "mydemo-c64be.firebaseapp.com",
  projectId: "mydemo-c64be",
  storageBucket: "mydemo-c64be.appspot.com",
  messagingSenderId: "542028692961",
  appId: "1:542028692961:web:e371751106144cbc2966a0",
  measurementId: "G-G4TYVD7WXK",
};
firebase.initializeApp(firebaseConfig); //khởi tạo firebase app function

const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectStorage, timestamp };
