import {
  CheckoutItemContainer,
  ImageContainer,
} from "./checkout-item.styles.jsx"
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
} from "store/shop/shop.actions.js"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItems } from "store/shop/shop.selector.js"

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const handleIncrementItem = () => {
    dispatch(addItemToCart(cartItems, cartItem))
  }
  const handleDecrementItem = () => {
    dispatch(removeItemFromCart(cartItems, cartItem))
  }
  const handleDeleteCartItem = () => {
    dispatch(deleteItemFromCart(cartItems, cartItem))
  }

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={handleDecrementItem}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={handleIncrementItem}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={handleDeleteCartItem}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
