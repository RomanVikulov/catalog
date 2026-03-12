import type { Product } from "../types/ProductType"


interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">

      <img
        src={`/images/${product.image}`}
        alt={product.name}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/images/placeholder.png"
        }}
      />

      <div className="price-row">

        {product.old_price && (
          <span className="old-price">
            {product.old_price} {product.currency}
          </span>
        )}

        <span className="price-now">
          {product.price} {product.currency}
        </span>

        {product.discount_percent > 0 && (
          <span className="discount">
            -{product.discount_percent}%
          </span>
        )}

      </div>

      <div className="title">
        {product.name}
      </div>

      <div className="rating">

        <div className="stars">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={
                i <= Math.round(product.rating)
                  ? "star active"
                  : "star"
              }
            >
              ★
            </span>
          ))}
        </div>

        <span className="reviews">
          {product.reviews_count}
        </span>

      </div>

<div className="volume">
  {product.volumes[0]?.label}
</div>

      <button className="btn">
        В корзину
      </button>

      <div className="meta">

        <span className="stock">
          ● В наличии
        </span>

        <span className="category">
          {product.category}
        </span>

      </div>

    </div>
  )
}