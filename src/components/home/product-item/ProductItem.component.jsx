import { useNavigate } from "react-router-dom"
import {
  BackgroundImage,
  ProductItemBody,
  ProductItemContainer,
} from "./product-item.styles.jsx"

function ProductItem({ category }) {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()

  const navigateHandler = () => navigate(route)
  return (
    <>
      <ProductItemContainer onClick={navigateHandler}>
        <BackgroundImage imageUrl={imageUrl} />
        <ProductItemBody>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </ProductItemBody>
      </ProductItemContainer>
    </>
  )
}

export default ProductItem
