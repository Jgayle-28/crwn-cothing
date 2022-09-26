import { Fragment, useContext } from "react"
import { ShopContext } from "context/shop/Shop.context"
import ProductCard from "components/shop/product-card/ProductCard.component"
import "./shop.styles.scss"

function Shop() {
  const { products } = useContext(ShopContext)
  return (
    <>
      {Object.keys(products).map((title) => (
        <Fragment key={products[title]}>
          <h2>{title}</h2>
          <div className='shop-container'>
            {products[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  )
}

export default Shop
