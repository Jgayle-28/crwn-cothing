import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import logger from "redux-logger"
import { rootReducer } from "./root.reducer"
import createSagaMiddleware from "redux-saga"

import { rootSaga } from "./root-saga"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["shop"],
}

const sagaMiddleware = createSagaMiddleware()

// This is now the store that get stored in local storage and passed to create store
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Add middle wares including saga
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean)

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, {}, composedEnhancers)

// After the store has been created run the instantiate the root saga
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
