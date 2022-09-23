import { createContext, useState, useEffect } from "react"
import { onAuthStateChangedListener } from "utils/firebase/firebase.utils"

// Context state
export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log("weee", user)
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
