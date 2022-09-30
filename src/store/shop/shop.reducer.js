import {
  TOGGLE_CART_MENU,
  SET_CART_ITEMS,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_SUCCESS,
} from "./shop.types"

const INITIAL_STATE = {
  products: [],
  cartMenuOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isLoading: false,
  error: null,
}

export const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      }
    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
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
