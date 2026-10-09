import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-3">
      <div className="container">
        <Link className="navbar-brand fw-bold text-success" to="/">
          <i className="bi bi-basket2-fill me-2"></i>
          Daily Mart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dailyMartNavbar"
          aria-controls="dailyMartNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="dailyMartNavbar"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Categories
              </Link>
            </li>
          </ul>

          <form className="d-flex me-lg-3 mb-3 mb-lg-0">
            <input
              className="form-control"
              type="search"
              placeholder="Search groceries"
              aria-label="Search groceries"
            />
          </form>

          <div className="d-flex align-items-center gap-3">
            <Link to="/wishlist" className="text-dark">
              <i className="bi bi-heart fs-5"></i>
            </Link>

            <Link to="/cart" className="text-dark">
              <i className="bi bi-cart3 fs-5"></i>
            </Link>

            <Link to="/login" className="btn btn-success">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;