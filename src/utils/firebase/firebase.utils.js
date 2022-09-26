import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCoX5RNctjNXp1VSGeFMHH71th1XKmBze8",
  authDomain: "crwn-clothing-db-cc233.firebaseapp.com",
  projectId: "crwn-clothing-db-cc233",
  storageBucket: "crwn-clothing-db-cc233.appspot.com",
  messagingSenderId: "776343492695",
  appId: "1:776343492695:web:fc4a062e9a8ad24a172b12",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

// Firestore
export const db = getFirestore()

// Import data into firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  documentObjects
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  documentObjects.forEach((object) => {
    const objectRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(objectRef, object)
  })

  await batch.commit()
}

// Get products
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories")
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()

    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return

  const userDocRef = doc(db, "users", userAuth.uid)
  const userSnapShot = await getDoc(userDocRef)

  // If user does not exist create user in DB
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, { displayName, email, createdAt })
    } catch (error) {
      console.log("error creating user :>> ", error)
    }
  }
  // If user exists return user
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => signOut(auth)

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)
