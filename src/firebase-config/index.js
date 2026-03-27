import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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
export const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

async function loginUsingEmailAndPassword(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}

async function registerUsingEmailAndPassword(name, email, password) {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
  }
}

function logout() {
  signOut(auth);
}

export {
  auth,
  loginUsingEmailAndPassword,
  logout,
  registerUsingEmailAndPassword,
};