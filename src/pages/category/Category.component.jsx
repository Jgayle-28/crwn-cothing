import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "context/shop/Shop.context"
import "./category.styles.scss"
import ProductCard from "components/shop/product-card/ProductCard.component"

function Category() {
  const { category } = useParams()
  const { products } = useContext(ShopContext)

  const [categoryProducts, setCategoryProducts] = useState([])

  useEffect(() => {
    setCategoryProducts(products[category])
  }, [category, products])

  return (
    <div className='category-container'>
      {categoryProducts &&
        categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Category
