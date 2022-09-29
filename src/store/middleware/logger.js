export const logger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }
  console.log(
    "%c REDUX::TYPE :>>",
    "background: #222; color: #DFFF00; font-weight: bold",
    action.type
  )
  console.log(
    "%c REDUX::PAYLOAD :>>",
    "background: #222; color: #FF00FF; font-weight: bold",
    action.payload
  )
  console.log(
    "%c REDUX::CURRENT_STATE :>> ",
    "background: #222; color: #1F51FF; font-weight: bold",
    store.getState()
  )

  next(action)

  console.log(
    "%c REDUX::NEXT_STATE :>> ",
    "background: #222; color: #AAFF00; font-weight: bold",
    store.getState()
  )
}
