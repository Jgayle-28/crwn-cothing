import { SET_CURRENT_USER } from "./auth.types"

export const setCurrentUser = (user) => {
  return { type: SET_CURRENT_USER, payload: user }
}
