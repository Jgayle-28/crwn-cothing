import { useContext, useRef } from "react"
import { ReactComponent as BagIcon } from "assets/shopping-bag.svg"
import { useClickAway } from "hooks/useClickAway"
import { ShopContext } from "context/shop/Shop.context"
import { Button } from "components/theme"
import CartDropdownItem from "../cart-dropdown-item/CartDropdownItem"
import "./cart-dropdown.styles.scss"
import "./cart-icon.styles.scss"

function CartDropdown() {
  const { cartItems, cartCount, cartMenuOpen, setCartMenuOpen } =
    useContext(ShopContext)

  const cartDropdownRef = useRef()
  useClickAway(cartDropdownRef, () => setCartMenuOpen(!cartMenuOpen))

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
      {cartMenuOpen && (
        <div className='cart-dropdown-container'>
          <div className='cart-items'>
            {cartItems.map((item) => (
              <CartDropdownItem key={item.id} cartIem={item} />
            ))}
          </div>
          <Button>GO TO CHECKOUT</Button>
        </div>
      )}
    </>
  )
}

export default CartDropdown
