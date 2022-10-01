import { takeLatest, all, call, put } from "redux-saga/effects"
import { getCategoriesAndDocuments } from "utils/firebase/firebase.utils"
import {
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
} from "./shop.types"

// yield === await -> Wait until I come back with something
// yield put() -> same as dispatch in sagas

export function* fetchProductsAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments())
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: categoriesArray })
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_FAILED, payload: error })
  }
}

// This generator function listens for FETCH_PRODUCTS_START and takes the latest
//  once it receives the action type it is looking for it calls fetchProductsAsync
export function* onFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS_START, fetchProductsAsync)
}

export function* shopSaga() {
  yield all([call(onFetchProducts)])
}
