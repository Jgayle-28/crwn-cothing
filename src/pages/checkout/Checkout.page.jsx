import { useContext } from "react"
import { ShopContext } from "context/shop/Shop.context"
import CheckoutItem from "components/shop/checkout-item/CheckoutItem.component"
import { CheckoutContainer, CheckoutHeader } from "./checkout-page.styles.jsx"

function CheckoutPage() {
  const { cartItems, cartTotal } = useContext(ShopContext)
  return (
    <CheckoutContainer>
      <CheckoutHeader>
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
      </CheckoutHeader>

      {cartItems?.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>Total: ${cartTotal}</span>
    </CheckoutContainer>
  )
}

export default CheckoutPage
