import { Button } from "components/theme"
import { BUTTON_TYPE_CLASSES } from "components/theme/button/Button.component"
import { ProductCardContainer } from "./product-card.styles.jsx"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItems } from "store/shop/shop.selector.js"
import { addItemToCart } from "store/shop/shop.actions.js"

function ProductCard({ product }) {
  const { name, imageUrl, price } = product

  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
