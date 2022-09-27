import {
  CartItemContainer,
  CartItemDetails,
} from "./cart-dropdown-item.styles.jsx"

export function CartDropdownItem({ cartIem }) {
  const { name, quantity, price, imageUrl } = cartIem
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <CartItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  )
}

export default CartDropdownItem
