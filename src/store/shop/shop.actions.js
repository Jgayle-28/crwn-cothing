import {
  TOGGLE_CART_MENU,
  SET_CART_ITEMS,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from "./shop.types"
import {
  addCartItem,
  removeCartItem,
  deleteCartItem,
} from "utils/shop/shop.utils"
import { getCategoriesAndDocuments } from "utils/firebase/firebase.utils"

export const setCartMenuOpen = () => {
  return { type: TOGGLE_CART_MENU }
}

export const fetchProductsStart = () => {
  return { type: FETCH_PRODUCTS_START }
}

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product)
  return { type: SET_CART_ITEMS, payload: newCartItems }
}

export const removeItemFromCart = (cartItems, product) => {
  const newCartItems = removeCartItem(cartItems, product)
  return { type: SET_CART_ITEMS, payload: newCartItems }
}

export const deleteItemFromCart = (cartItems, product) => {
  const newCartItems = deleteCartItem(cartItems, product)
  return { type: SET_CART_ITEMS, payload: newCartItems }
}
