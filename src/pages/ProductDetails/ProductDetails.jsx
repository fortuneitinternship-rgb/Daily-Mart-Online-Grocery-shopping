import { Link, useParams } from "react-router-dom";
import products from "../../data/products.js";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h2>Product Not Found</h2>
        <Link to="/products" className="btn btn-primary mt-3">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>

          <h4 className="text-success">₹{product.price}</h4>

          <p>Category: {product.category}</p>

          <p>Rating: ⭐ {product.rating}</p>

          <button
            className="btn btn-success me-2"
            onClick={() => alert("Product added to cart!")}
          >
            Add to Cart
          </button>

          <Link to="/products" className="btn btn-secondary">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
