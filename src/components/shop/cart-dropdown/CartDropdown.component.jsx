import { useRef } from "react"
import { ReactComponent as BagIcon } from "assets/shopping-bag.svg"
// import { useClickAway } from "hooks/useClickAway"
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
import { useSelector, useDispatch } from "react-redux"
import { setCartMenuOpen } from "store/shop/shop.actions"
import { selectCarCount, selectCartItems } from "store/shop/shop.selector"

function CartDropdown() {
  const cartItems = useSelector(selectCartItems)
  const cartCount = useSelector(selectCarCount)
  const { cartMenuOpen } = useSelector((state) => state.shop)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartDropdownRef = useRef()
  // useClickAway(cartDropdownRef, () => setCartMenuOpen(!cartMenuOpen))

  const handleToggleMenu = () => dispatch(setCartMenuOpen())

  const goToCheckout = () => {
    navigate("/checkout")
    handleToggleMenu()
  }

  return (
    <>
      <CartIconContainer
        ref={cartDropdownRef}
        className='cart-icon-container'
        onClick={handleToggleMenu}
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
