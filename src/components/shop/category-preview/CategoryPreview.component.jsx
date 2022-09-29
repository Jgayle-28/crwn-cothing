import ProductCard from "components/shop/product-card/ProductCard.component"
import { Link } from "react-router-dom"
import { CategoryPreviewContainer } from "./category-preview.styles.jsx"

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={`/shop/${title}`}>
          <span className='title'>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className='preview'>
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
