import { TOGGLE_CART_MENU, SET_PRODUCTS, SET_CART_ITEMS } from "./shop.types"
import {
  addCartItem,
  removeCartItem,
  deleteCartItem,
} from "utils/shop/shop.utils"

export const setCartMenuOpen = () => {
  return { type: TOGGLE_CART_MENU }
}

export const setProducts = (products) => {
  return { type: SET_PRODUCTS, payload: products }
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
