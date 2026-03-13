import type { Product } from '../types/ProductType';
import StockIcon from './StockIcon';
import waterDrop from "../assets/svg/waterDrop.svg"
import discountBadge from "../assets/svg/discountBadge.svg"

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card ">
      <img className="product-img"
        src={`/images/${product.image}`}
        alt={product.name}
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/images/placeholder.png';
        }}
      />

      <div className="price-row">

        <span className="old-price">
          {product.old_price}
        </span>

        <span className="price-now">
          {product.price} грн
        </span>

        <div className="discount-badge">

          <img
            src={discountBadge}
            alt=""
            className="discount-bg"
          />

          <span className="discount-text">
            {product.discount_percent}%
          </span>

        </div>

      </div>

      <div className="card_title">{product.name}</div>

      <div className="rating">
        <div className="stars">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className={i <= Math.round(product.rating) ? 'star active' : 'star'}>
              ★
            </span>
          ))}
        </div>

        <span className="reviews">{product.reviews_count}</span>
      </div>

      <div className="meta">

        <StockIcon inStock={product.in_stock} />

        <img
          src={waterDrop}
          alt=""
          className="meta-icon"
        />

        <span className="category">
          {product.category}
        </span>

      </div>

      <div className="actions">

        {product.volumes.length > 1 && (
          <select className="volume-select">

            {product.volumes.map(v => (
              <option
                key={v.id}
                value={v.id}
                disabled={!v.in_stock}
              >
                {v.label}
              </option>
            ))}

          </select>
        )}

        <button className="cart-btn">
          🛒 В корзину
        </button>

      </div>
    </div>
  );
}
