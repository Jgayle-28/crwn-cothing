import { useContext } from "react"
import { ShopContext } from "context/shop/Shop.context"
import {
  CheckoutItemContainer,
  ImageContainer,
} from "./checkout-item.styles.jsx"

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(ShopContext)

  const handleIncrementItem = () => addItemToCart(cartItem)
  const handleDecrementItem = () => removeItemFromCart(cartItem)
  const handleDeleteCartItem = () => deleteItemFromCart(cartItem)

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
