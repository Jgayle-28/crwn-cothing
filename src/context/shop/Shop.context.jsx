import { createContext, useEffect, useReducer } from "react"
import {
  addCartItem,
  removeCartItem,
  deleteCartItem,
} from "utils/shop/shop.utils"
import { getCategoriesAndDocuments } from "utils/firebase/firebase.utils"
import {
  TOGGLE_CART_MENU,
  SET_PRODUCTS,
  SET_CART_ITEMS,
  SET_CART_COUNT,
} from "./shop.types"

// Context
export const ShopContext = createContext({
  products: {},
  cartMenuOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  setProducts: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  setCartMenuOpen: () => {},
})

// Reducer
const INITIAL_STATE = {
  products: {},
  cartMenuOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

const cartReducer = (state, action) => {
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
        ...payload,
      }
    case SET_CART_COUNT:
      return {
        ...state,
        cartCount: payload,
      }

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }
}

// Provider
export const ShopProvider = ({ children }) => {
  const [
    { products, cartMenuOpen, cartItems, cartCount, cartTotal },
    dispatch,
  ] = useReducer(cartReducer, INITIAL_STATE)

  const setProducts = () => {}

  const setCartMenuOpen = () => {
    dispatch({ type: TOGGLE_CART_MENU })
  }

  const setCartItems = (items) => {
    dispatch({
      type: SET_CART_ITEMS,
      payload: {
        cartItems: items,
        cartCount: items.reduce(
          (total, cartIem) => total + cartIem.quantity,
          0
        ),
        cartTotal: items.reduce(
          (total, cartIem) => total + cartIem.quantity * cartIem.price,
          0
        ),
      },
    })
  }

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndDocuments()
      dispatch({ type: SET_PRODUCTS, payload: categories })
    }
    getCategories()
  }, [])

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product)
    setCartItems(newCartItems)
  }

  const removeItemFromCart = (product) => {
    const newCartItems = removeCartItem(cartItems, product)
    setCartItems(newCartItems)
  }

  const deleteItemFromCart = (product) => {
    const newCartItems = deleteCartItem(cartItems, product)
    setCartItems(newCartItems)
  }

  const value = {
    // values
    products,
    cartItems,
    cartMenuOpen,
    cartCount,
    cartTotal,
    // setters
    setProducts,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    setCartMenuOpen,
  }
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
