import { Routes, Route } from "react-router-dom"
import CategoriesPreview from "pages/shop/categories-preview/Categories-preview.page"
import Category from "pages/shop/category/Category.component"

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop
