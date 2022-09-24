import { createContext, useState, useEffect } from "react"
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "utils/firebase/firebase.utils"

// Context state
export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  // onAuthStateChanged from firebase allows us to only update when the 'auth' singleton has changed thus preventing unnecessary re renders
  // Which in return enhances performance and centralizes authentication actions "REGISTER & SIGN IN"
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // If a user is coming back "NOT SIGNING OUT"
      if (user) createUserDocumentFromAuth(user)
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  const value = {
    // Values
    currentUser,
    // Setter
    setCurrentUser,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
