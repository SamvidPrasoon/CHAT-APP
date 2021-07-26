import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAZmrAiaoh7jMM0NRCkFaszY5IqC_9S1WY",
    authDomain: "message-31f08.firebaseapp.com",
    projectId: "message-31f08",
    storageBucket: "message-31f08.appspot.com",
    messagingSenderId: "923935172628",
    appId: "1:923935172628:web:08846dc29179797c11df01",
    measurementId: "G-GZNFDTJM2R"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;