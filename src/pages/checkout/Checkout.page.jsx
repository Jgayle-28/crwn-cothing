import { useSelector } from "react-redux"
import { selectCartItems, selectCartTotal } from "store/shop/shop.selector.js"
import CheckoutItem from "components/shop/checkout-item/CheckoutItem.component"
import { CheckoutContainer, CheckoutHeader } from "./checkout-page.styles.jsx"
import PaymentForm from "components/forms/shop/payment-form/PaymentForm.component.jsx"

function CheckoutPage() {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
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
      <PaymentForm />
    </CheckoutContainer>
  )
}

export default CheckoutPage
