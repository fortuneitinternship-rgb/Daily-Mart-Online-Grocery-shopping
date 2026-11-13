import { Link } from "react-router-dom";

export default function Wishlist() {
  return (
    <section className="container py-5">
      <h1 className="section-title">My Wishlist</h1>
      <div className="empty-state">
        <i className="bi bi-heart display-3 text-danger" />
        <h4 className="mt-3">Your wishlist is empty</h4>
        <p className="text-muted">
          Save products you would like to find later.
        </p>
        <Link to="/products" className="btn btn-success">
          Explore Products
        </Link>
      </div>
    </section>
  );
}
