import { createContext, useState } from "react"
import SHOP_DATA from "shopData"

export const ShopContext = createContext({
  products: null,
  cartMenuOpen: false,
  cart: {},
  setCartMenuOpen: () => {},
})

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA)
  const [cartMenuOpen, setCartMenuOpen] = useState(false)
  const [cart, setCart] = useState({})

  const value = {
    // values
    products,
    cart,
    cartMenuOpen,
    // setters
    setProducts,
    setCart,
    setCartMenuOpen,
  }
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
