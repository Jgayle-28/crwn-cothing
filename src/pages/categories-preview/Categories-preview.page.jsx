import { useContext } from "react"
import { ShopContext } from "context/shop/Shop.context"
import CategoryPreview from "components/shop/category-preview/CategoryPreview.component"
import "./category-preview.styles.scss"

function CategoriesPreview() {
  const { products } = useContext(ShopContext)
  return (
    <>
      {Object.keys(products).map((title) => {
        const innerProducts = products[title]
        return (
          <CategoryPreview key={title} title={title} products={innerProducts} />
        )
      })}
    </>
  )
}

export default CategoriesPreview
