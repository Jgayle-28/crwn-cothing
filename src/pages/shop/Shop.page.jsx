import { useContext } from "react"
import { ShopContext } from "context/shop/Shop.context"
import ProductCard from "components/shop/product-card/ProductCard.component"
import "./shop.styles.scss"

function Shop() {
  const { products } = useContext(ShopContext)
  return (
    <div className='shop-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop
