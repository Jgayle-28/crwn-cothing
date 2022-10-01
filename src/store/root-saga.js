import { all, call } from "redux-saga/effects"
import { authSaga } from "./auth/auth.saga"
import { shopSaga } from "./shop/shop.saga"

export function* rootSaga() {
  yield all([call(shopSaga), call(authSaga)])
}
