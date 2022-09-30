import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { rootReducer } from "./root.reducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["shop"],
}

// This is now the store that get stored in local storage and passed to create store
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean)

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, {}, composedEnhancers)

export const persistor = persistStore(store)
