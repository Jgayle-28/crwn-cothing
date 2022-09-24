import { useContext } from "react"
import { ShopContext } from "context/shop/Shop.context"
import { Button } from "components/theme"
import "./product-card.styles.scss"

function ProductCard({ product }) {
  const { name, imageUrl, price } = product
  const { addItemToCart } = useContext(ShopContext)

  const addProductToCart = () => addItemToCart(product)

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  )
}

export default ProductCard
