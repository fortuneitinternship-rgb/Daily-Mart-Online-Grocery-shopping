import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <section className="container py-5">
      <h1 className="section-title">Shopping Cart</h1>
      <div className="empty-state">
        <i className="bi bi-cart3 display-3 text-success" />
        <h4 className="mt-3">Your cart is currently empty</h4>
        <p className="text-muted">Explore our products and choose your groceries.</p>
        <Link to="/products" className="btn btn-success">Shop Now</Link>
      </div>
    </section>
  );
}