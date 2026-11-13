import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-success fs-3" to="/">
          <i className="bi bi-basket2-fill me-2" />
          Daily Mart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dailyMartNav"
          aria-controls="dailyMartNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="dailyMartNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Categories
              </NavLink>
            </li>
          </ul>
          <form
            className="d-flex nav-search me-lg-3 my-2 my-lg-0"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search groceries"
              aria-label="Search groceries"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              aria-label="Search"
            >
              <i className="bi bi-search" />
            </button>
          </form>
          <div className="d-flex align-items-center gap-3 py-2">
            <Link to="/wishlist" className="nav-icon" aria-label="Wishlist">
              <i className="bi bi-heart fs-5" />
            </Link>
            <Link to="/cart" className="nav-icon" aria-label="Cart">
              <i className="bi bi-cart3 fs-5" />
            </Link>
            <Link to="/login" className="btn btn-success btn-sm px-3">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
