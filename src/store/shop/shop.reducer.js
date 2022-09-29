import { TOGGLE_CART_MENU, SET_PRODUCTS, SET_CART_ITEMS } from "./shop.types"

const INITIAL_STATE = {
  products: [],
  cartMenuOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

export const shopReducer = (state = INITIAL_STATE, action) => {
  console.log(`I am in the reducer`)
  const { type, payload } = action
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      }
    case TOGGLE_CART_MENU:
      return {
        ...state,
        cartMenuOpen: !state.cartMenuOpen,
      }
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      }

    default:
      return state
  }
}
