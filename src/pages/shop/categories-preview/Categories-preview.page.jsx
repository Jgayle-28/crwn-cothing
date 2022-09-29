import { useSelector } from "react-redux"
import { selectProducts } from "store/shop/shop.selector"
import CategoryPreview from "components/shop/category-preview/CategoryPreview.component"

function CategoriesPreview() {
  const products = useSelector(selectProducts)
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
