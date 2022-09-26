import { Routes, Route } from "react-router-dom"
import CategoriesPreview from "pages/categories-preview/Categories-preview.page"
import Category from "pages/category/Category.component"
import "./shop.styles.scss"

// TODO -> Nest category pages in shop directory and update imports

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop
