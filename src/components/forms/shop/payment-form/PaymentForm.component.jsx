import { useState } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./payment-form.styles"
import { useSelector } from "react-redux"
import { selectCartTotal } from "store/shop/shop.selector"
import { selectCurrentUser } from "store/auth/auth.selector"

function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const cartTotal = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)

  const [processingPayment, setProcessingPayment] = useState(false)

  const handlePaymentSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) return

    setProcessingPayment(true)

    const res = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json)

    const {
      paymentIntent: { client_secret },
    } = res

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    })

    setProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error)
    }

    if (paymentResult.paymentIntent.status === "succeeded") {
      alert(`Payment Successful`)
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={handlePaymentSubmit}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <PaymentButton
          isLoading={processingPayment}
          buttonType='inverted'
          type='submit'
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm
