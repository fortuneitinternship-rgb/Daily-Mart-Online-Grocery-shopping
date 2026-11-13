import { Link } from "react-router-dom";
import products from "../../data/products.js";
import ProductCard from "../../components/ProductCard/ProductCard";

function Home() {
  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <section className="home-banner p-5 rounded">
        <h1>Fresh Groceries Delivered to Your Door</h1>

        <p>Shop your everyday groceries at the best prices.</p>

        <Link to="/products" className="btn btn-success">
          Shop Now
        </Link>
      </section>

      {/* Categories */}
      <section className="mt-5">
        <h2>Shop by Category</h2>

        <div className="row mt-3">
          {["Snacks", "Rice & Dal", "Flours", "Daily Needs", "Coconut"].map(
            (category, index) => (
              <div className="col-md-2 col-6 mb-3" key={index}>
                <Link to="/products" className="category-box">
                  {category}
                </Link>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mt-5 mb-5">
        <h2>Featured Products</h2>

        <div className="row mt-3">
          {products.map((product) => (
            <div className="col-md-3 col-6 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
