import { createContext, useEffect, useReducer } from "react"
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "utils/firebase/firebase.utils"

// Context state
export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const SET_CURRENT_USER = `SET_CURRENT_USER`

const INITIAL_STATE = {
  currentUser: null,
}

// Reducer
const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      }

    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

// Provider
export const AuthProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const setCurrentUser = (user) => {
    dispatch({ type: SET_CURRENT_USER, payload: user })
  }

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
