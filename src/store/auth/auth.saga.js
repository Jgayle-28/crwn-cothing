import { takeLatest, all, call, put } from "redux-saga/effects"
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from "utils/firebase/firebase.utils"
import {
  emailSignInStart,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpSuccess,
  singInSuccess,
} from "./auth.actions"
import {
  CHECK_USER_SESSION,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_FAILURE,
  SIGN_OUT_START,
} from "./auth.types"

// put -> tells saga to dispatch to the store
// call -> handles functions outside of actions and redux

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  console.log("userAuth :>> ", userAuth)
  console.log("additionalDetails", additionalDetails)
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    )
    yield put(singInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    console.log("I AM IN THE ERROR")
    yield put(signInFailure(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    )
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup)
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signUpStart({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    )
    yield put(signUpSuccess(user, { displayName }))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* signOut() {
  try {
    yield call(signOutUser)
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure())
  }
}

export function* checkUserAuth() {
  try {
    const userAuth = yield call(getCurrentUser)
    console.log("userAuth :>> ", userAuth)
    if (!userAuth) return
    console.log(`I MADE IT PAST`)
    yield call(getSnapshotFromUserAuth(userAuth))
    // Pass to new saga to handler creating a user in firebase
  } catch (error) {
    yield put(signInFailure(error))
  }
}

// Entry point sagas
export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, emailSignInStart)
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, checkUserAuth)
}

export function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUpStart)
}

export function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut)
}

// Export root auth saga
export function* authSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ])
}
