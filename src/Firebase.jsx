// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBjTrhrDGIAom-OWplREO9u9QitMnAbXtk",
  authDomain: "my-recipe-book-1f797.firebaseapp.com",
  databaseURL: "https://my-recipe-book-1f797-default-rtdb.firebaseio.com",
  projectId: "my-recipe-book-1f797",
  storageBucket: "my-recipe-book-1f797.appspot.com",
  messagingSenderId: "32554790199",
  appId: "1:32554790199:web:60b3ff4d8f659a63a67eb2",
  measurementId: "G-2N43Q9LXHV",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export function logout() {
  return signOut(auth);
}
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app) ;
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}




