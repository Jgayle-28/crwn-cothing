import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

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

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// Firestore
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
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
