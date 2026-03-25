import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCCa1QMZRk9x6sZnCdL3-iJ1hpp-m6EvQc",
  authDomain: "react-interview-firebase-b9ad4.firebaseapp.com",
  projectId: "react-interview-firebase-b9ad4",
  storageBucket: "react-interview-firebase-b9ad4.firebasestorage.app",
  messagingSenderId: "613378812993",
  appId: "1:613378812993:web:4f8259c72cac373239aac0",
  measurementId: "G-X66SZC85E2"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)
