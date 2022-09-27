import { useContext } from "react"
import { ShopContext } from "context/shop/Shop.context"
import { Button } from "components/theme"
import { BUTTON_TYPE_CLASSES } from "components/theme/button/Button.component"
import { ProductCardContainer } from "./product-card.styles.jsx"

function ProductCard({ product }) {
  const { name, imageUrl, price } = product
  const { addItemToCart } = useContext(ShopContext)

  const addProductToCart = () => addItemToCart(product)

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
