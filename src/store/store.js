import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
// import logger from "redux-logger"
import { rootReducer } from "./root.reducer"

const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }
  console.log("TYPE :>>", action.type)
  console.log("PAYLOAD :>>", action.payload)
  console.log("currentState :>> ", store.getState())

  next(action)

  console.log("nextState :>> ", store.getState())
}

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["auth"],
}

// This is now the store that get stored in local storage and passed to create store
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [loggerMiddleWare]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, {}, composedEnhancers)

export const persistor = persistStore(store)
