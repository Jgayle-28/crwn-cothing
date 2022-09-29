import { createSelector } from "reselect"

const selectProductsReducer = (state) => state.shop

export const selectProducts = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.products
)

export const selectCartItems = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.cartItems
)

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
)

export const selectCarCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)

export const selectProductsMap = createSelector([selectProducts], (products) =>
  products.reduce((acc, category) => {
    const { title, items } = category
    acc[title.toLowerCase()] = items
    return acc
  }, {})
)
