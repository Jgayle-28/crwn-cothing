import { combineReducers } from "redux"
import { authReducer } from "./auth/auth.reducer"
import { shopReducer } from "./shop/shop.reducer"

export const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
})
