import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4YWNe9Gr7CvZZfqvjVuY8s7bwgFpVh_s",
    authDomain: "clone-f141f.firebaseapp.com",
    projectId: "clone-f141f",
    storageBucket: "clone-f141f.appspot.com",
    messagingSenderId: "888698923265",
    appId: "1:888698923265:web:efce77b5112205ffc11300",
    measurementId: "G-929SEJL5TJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

