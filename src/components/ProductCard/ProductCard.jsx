import "./ProductCard.css";

function ProductCard({ product, onAddToCart, onAddToWishlist }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top product-image"
        alt={product.name}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>

        <p className="text-success fw-bold">
          ₹{product.price}
        </p>

        <p>
          <i className="bi bi-star-fill text-warning"></i>{" "}
          {product.rating}
        </p>

        <div className="d-flex gap-2 mt-auto">
          <button
            className="btn btn-success flex-grow-1"
            onClick={() => onAddToCart?.(product)}
          >
            Add to Cart
          </button>

          <button
            className="btn btn-outline-danger"
            onClick={() => onAddToWishlist?.(product)}
            aria-label={`Add ${product.name} to wishlist`}
          >
            <i className="bi bi-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;