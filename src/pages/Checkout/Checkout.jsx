import { Link } from "react-router-dom";

export default function Checkout() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Checkout UI demo only. No order or payment has been placed.");
  };

  return (
    <section className="container py-5">
      <h1 className="section-title">Checkout</h1>
      <div className="row">
        <div className="col-lg-7">
          <form className="card card-body shadow-sm" onSubmit={handleSubmit}>
            <h5>Delivery Information</h5>
            <label className="form-label mt-3" htmlFor="fullName">
              Full Name
            </label>
            <input id="fullName" className="form-control" required />
            <label className="form-label mt-3" htmlFor="phone">
              Phone Number
            </label>
            <input id="phone" className="form-control" type="tel" required />
            <label className="form-label mt-3" htmlFor="address">
              Delivery Address
            </label>
            <textarea id="address" className="form-control" rows="3" required />
            <button className="btn btn-success mt-4" type="submit">
              Continue
            </button>
          </form>
        </div>
        <div className="col-lg-5 mt-3 mt-lg-0">
          <div className="card card-body shadow-sm">
            <h5>Order Summary</h5>
            <p className="text-muted">
              Your cart is empty in this starter version.
            </p>
            <Link to="/products" className="btn btn-outline-success">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
