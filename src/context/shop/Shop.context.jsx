import { createContext, useEffect, useState } from "react"
import {
  addCartItem,
  removeCartItem,
  deleteCartItem,
} from "utils/shop/shop.utils"
import { getCategoriesAndDocuments } from "utils/firebase/firebase.utils"

export const ShopContext = createContext({
  products: null,
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

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(null)
  const [cartMenuOpen, setCartMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndDocuments()
      console.log("categories :>> ", categories)
    }
    getCategories()
  }, [])

  useEffect(() => {
    const newCartItems = cartItems.reduce(
      (total, cartIem) => total + cartIem.quantity,
      0
    )
    setCartCount(newCartItems)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartIem) => total + cartIem.quantity * cartIem.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

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
