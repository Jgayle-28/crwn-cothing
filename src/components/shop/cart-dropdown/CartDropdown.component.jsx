import { useContext } from "react"
import { ReactComponent as BagIcon } from "assets/shopping-bag.svg"
import { Button } from "components/theme"
import "./cart-dropdown.styles.scss"
import "./cart-icon.styles.scss"
import { ShopContext } from "context/shop/Shop.context"

function CartDropdown() {
  const { cartMenuOpen, setCartMenuOpen } = useContext(ShopContext)

  return (
    <>
      <div
        className='cart-icon-container'
        onClick={() => setCartMenuOpen(!cartMenuOpen)}
      >
        <BagIcon className='shopping-icon' />
        <span className='item-count'>0</span>
      </div>
      {cartMenuOpen && (
        <div className='cart-dropdown-container'>
          <div className='cart-items'></div>
          <Button>GO TO CHECKOUT</Button>
        </div>
      )}
    </>
  )
}

export default CartDropdown
