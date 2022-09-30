import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {
  selectProductsIsLoading,
  selectProductsMap,
} from "store/shop/shop.selector.js"
import {
  CategoryContainer,
  CategoryContainerTitle,
} from "./category.styles.jsx"
import ProductCard from "components/shop/product-card/ProductCard.component"
import Spinner from "components/theme/spinner/Spinner.component.jsx"

function Category() {
  const { category } = useParams()
  const products = useSelector(selectProductsMap)
  const isLoading = useSelector(selectProductsIsLoading)

  const [categoryProducts, setCategoryProducts] = useState([])

  useEffect(() => {
    setCategoryProducts(products[category.toLowerCase()])
  }, [category, products])

  if (isLoading) return <Spinner />

  return (
    <>
      <CategoryContainerTitle>{category.toUpperCase()}</CategoryContainerTitle>
      <CategoryContainer>
        {categoryProducts &&
          categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  )
}

export default Category
