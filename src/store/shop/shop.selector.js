import { createSelector } from "reselect"

const selectShopReducer = (state) => state.shop

export const selectProducts = createSelector(
  [selectShopReducer],
  (shopSlice) => shopSlice.products
)

export const selectCartItems = createSelector(
  [selectShopReducer],
  (shopSlice) => shopSlice.cartItems
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

export const selectProductsIsLoading = createSelector(
  [selectShopReducer],
  (shopSlice) => shopSlice.isLoading
)
