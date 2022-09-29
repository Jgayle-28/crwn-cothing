import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setProducts } from "store/shop/shop.actions"
import { getCategoriesAndDocuments } from "utils/firebase/firebase.utils"
import CategoriesPreview from "pages/shop/categories-preview/Categories-preview.page"
import Category from "pages/shop/category/Category.component"

function Shop() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategories = async () => {
      const categoriesArray = await getCategoriesAndDocuments()
      dispatch(setProducts(categoriesArray))
    }
    getCategories()
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop
