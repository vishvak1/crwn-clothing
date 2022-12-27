// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-nxbGl7HW8qYjunK8V1v90qwig0bQ5_M",
  authDomain: "crwn-clothing-c8600.firebaseapp.com",
  projectId: "crwn-clothing-c8600",
  storageBucket: "crwn-clothing-c8600.appspot.com",
  messagingSenderId: "661141990655",
  appId: "1:661141990655:web:09ffe8b900723b5b3c70ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const register = async (email, password, name, updateUser) => {
  try {
    // Create user with email and password
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((err) => console.log(err));
    // Update the user with the entered displayName and also update the user in the user.context.jsx
    await updateProfile(user, { displayName: name }).then(() => {
      updateUser(user);
    });
    // Create a firestore instance for the user
    await createUserDocumentFromAuth(user);
  } catch (error) {
    console.log(error);
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const updateAuthProfile = async (user, name) => {
  return await updateProfile(user, {
    displayName: name,
  });
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutAuthUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
