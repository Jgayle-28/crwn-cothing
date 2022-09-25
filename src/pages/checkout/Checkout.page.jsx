import { useContext } from "react"
import { ShopContext } from "context/shop/Shop.context"
import "./checkout-page.styles.scss"
import CheckoutItem from "components/shop/checkout-item/CheckoutItem.component"

function CheckoutPage() {
  const { cartItems, cartTotal } = useContext(ShopContext)
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems?.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  )
}

export default CheckoutPage
