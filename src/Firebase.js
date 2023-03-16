import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCP6-wgIUsvKMnzS4FeU8_IIQ3Xdk5UPl4",
    authDomain: "react101-53918.firebaseapp.com",
    projectId: "react101-53918",
    storageBucket: "react101-53918.appspot.com",
    messagingSenderId: "334975861862",
    appId: "1:334975861862:web:f8b03e2557b4a1965459a7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db,auth };