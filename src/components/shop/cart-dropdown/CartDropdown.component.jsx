import { useContext, useRef } from "react"
import { ReactComponent as BagIcon } from "assets/shopping-bag.svg"
// import { useClickAway } from "hooks/useClickAway"
import { ShopContext } from "context/shop/Shop.context"
import { Button } from "components/theme"
import CartDropdownItem from "../cart-dropdown-item/CartDropdownItem"
import "./cart-dropdown.styles.jsx"
import "./cart-icon.styles.jsx"
import { useNavigate } from "react-router-dom"
import {
  CartDropdownContainer,
  CartDropdownEmptyMessage,
  CartDropdownItems,
} from "./cart-dropdown.styles.jsx"
import { CartIconContainer } from "./cart-icon.styles.jsx"

function CartDropdown() {
  const { cartItems, cartCount, cartMenuOpen, setCartMenuOpen } =
    useContext(ShopContext)
  const navigate = useNavigate()

  const cartDropdownRef = useRef()
  // useClickAway(cartDropdownRef, () => setCartMenuOpen(!cartMenuOpen))

  const goToCheckout = () => {
    navigate("/checkout")
    setCartMenuOpen(false)
  }

  return (
    <>
      <CartIconContainer
        ref={cartDropdownRef}
        className='cart-icon-container'
        onClick={() => setCartMenuOpen(!cartMenuOpen)}
      >
        <BagIcon className='shopping-icon' />
        <span className='item-count'>{cartCount}</span>
      </CartIconContainer>
      {cartMenuOpen && (
        <CartDropdownContainer>
          <CartDropdownItems>
            {cartItems.length ? (
              cartItems.map((item) => (
                <CartDropdownItem key={item.id} cartIem={item} />
              ))
            ) : (
              <CartDropdownEmptyMessage>
                No items in cart
              </CartDropdownEmptyMessage>
            )}
          </CartDropdownItems>
          <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
      )}
    </>
  )
}

export default CartDropdown
