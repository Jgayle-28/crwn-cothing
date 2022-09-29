import { SET_CURRENT_USER } from "./auth.types.js"

const INITIAL_STATE = {
  currentUser: null,
}

export const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      return state
  }
}
