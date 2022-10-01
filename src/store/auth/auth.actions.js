import {
  CHECK_USER_SESSION,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
} from "./auth.types"

export const checkUserSession = () => {
  return { type: CHECK_USER_SESSION }
}

// Sign in
export const googleSignInStart = () => {
  return { type: GOOGLE_SIGN_IN_START }
}

export const emailSignInStart = (email, password) => {
  return { type: EMAIL_SIGN_IN_START, payload: { email, password } }
}

export const singInSuccess = (user) => {
  return { type: SIGN_IN_SUCCESS, payload: user }
}

export const signInFailure = (error) => {
  return { type: SIGN_IN_FAILURE, payload: error }
}

// Sign up
export const signUpStart = (email, password, displayName) => {
  return { type: SIGN_UP_START, payload: { email, password, displayName } }
}

export const signUpSuccess = (user, additionalDetails) => {
  return { type: SIGN_UP_SUCCESS, payload: { user, additionalDetails } }
}

export const signUpFailure = (error) => {
  return { type: SIGN_UP_FAILURE, payload: error }
}

// Sign out
export const signOutStart = () => {
  return { type: SIGN_OUT_START }
}

export const signOutSuccess = () => {
  return { type: SIGN_OUT_SUCCESS }
}

export const signOutFailure = (error) => {
  return { type: SIGN_OUT_SUCCESS, payload: error }
}
