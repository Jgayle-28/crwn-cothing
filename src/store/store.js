import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux"
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

const middleWares = [loggerMiddleWare]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, {}, composedEnhancers)
