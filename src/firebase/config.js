import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBYeb5VD7_Nb6YKEq-B5BQ2MDJ5BJw47ps",
  authDomain: "teamup-6947a.firebaseapp.com",
  projectId: "teamup-6947a",
  storageBucket: "teamup-6947a.appspot.com",
  messagingSenderId: "44614150647",
  appId: "1:44614150647:web:4db6852ee0fcae9ab726f2"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }