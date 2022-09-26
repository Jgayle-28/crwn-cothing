import "./product-item.styles.scss"

function ProductItem({ category }) {
  const { title, imageUrl } = category
  return (
    <>
      <div className='product-item-container'>
        <div
          className='background-image'
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className='product-item-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  )
}

export default ProductItem
