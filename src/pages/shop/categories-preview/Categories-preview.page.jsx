import { useSelector } from "react-redux"
import {
  selectProducts,
  selectProductsIsLoading,
} from "store/shop/shop.selector"
import CategoryPreview from "components/shop/category-preview/CategoryPreview.component"
import Spinner from "components/theme/spinner/Spinner.component"

function CategoriesPreview() {
  const products = useSelector(selectProducts)
  const isLoading = useSelector(selectProductsIsLoading)

  if (isLoading) return <Spinner />
  return (
    <>
      {products.map((category) => {
        return (
          <CategoryPreview
            key={category.title}
            title={category.title}
            products={category.items}
          />
        )
      })}
    </>
  )
}

export default CategoriesPreview
