import { useContext, useRef } from "react"
import { ReactComponent as BagIcon } from "assets/shopping-bag.svg"
// import { useClickAway } from "hooks/useClickAway"
import { ShopContext } from "context/shop/Shop.context"
import { Button } from "components/theme"
import CartDropdownItem from "../cart-dropdown-item/CartDropdownItem"
import "./cart-dropdown.styles.scss"
import "./cart-icon.styles.scss"
import { useNavigate } from "react-router-dom"

function CartDropdown() {
  const { cartItems, cartCount, cartMenuOpen, setCartMenuOpen } =
    useContext(ShopContext)
  const navigate = useNavigate()

  const showDropdownMenu = cartItems.length > 0 && cartMenuOpen

  const cartDropdownRef = useRef()
  // useClickAway(cartDropdownRef, () => setCartMenuOpen(!cartMenuOpen))

  const goToCheckout = () => {
    navigate("/checkout")
    setCartMenuOpen(false)
  }

  return (
    <>
      <div
        ref={cartDropdownRef}
        className='cart-icon-container'
        onClick={() => setCartMenuOpen(!cartMenuOpen)}
      >
        <BagIcon className='shopping-icon' />
        <span className='item-count'>{cartCount}</span>
      </div>
      {showDropdownMenu && (
        <div className='cart-dropdown-container'>
          <div className='cart-items'>
            {cartItems.map((item) => (
              <CartDropdownItem key={item.id} cartIem={item} />
            ))}
          </div>
          <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </div>
      )}
    </>
  )
}

export default CartDropdown
