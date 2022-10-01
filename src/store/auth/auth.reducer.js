import {
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILURE,
} from "./auth.types.js"

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      }
    case SIGN_OUT_SUCCESS:
    case SIGN_OUT_FAILURE:
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
        error: payload,
      }
    default:
      return state
  }
}
