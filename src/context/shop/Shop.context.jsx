import { createContext, useEffect, useState } from "react"
import { addCartItem } from "utils/shop/shop.utils"
import SHOP_DATA from "shopData"

export const ShopContext = createContext({
  products: null,
  cartMenuOpen: false,
  cartItems: [],
  cartCount: 0,
  setProducts: () => {},
  addItemToCart: () => {},
  setCartMenuOpen: () => {},
})

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA)
  const [cartMenuOpen, setCartMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartItems = cartItems.reduce(
      (total, cartIem) => total + cartIem.quantity,
      0
    )
    setCartCount(newCartItems)
  }, [cartItems])

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product)
    setCartItems(newCartItems)
  }

  const value = {
    // values
    products,
    cartItems,
    cartMenuOpen,
    cartCount,
    // setters
    setProducts,
    addItemToCart,
    setCartMenuOpen,
  }
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
