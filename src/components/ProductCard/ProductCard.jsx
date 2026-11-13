function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <div className="card-body text-center">
        <h1>{product.image}</h1>

        <h5>{product.name}</h5>

        <p>
          ₹{product.price}
          <del className="ms-2 text-muted">₹{product.oldPrice}</del>
        </p>

        <p>⭐ {product.rating}</p>

        <span className="badge bg-success">{product.discount}</span>

        <button className="btn btn-success w-100 mt-3">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
