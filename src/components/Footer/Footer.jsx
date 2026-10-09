function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h4 className="text-success">Daily Mart</h4>

            <p>
              Your everyday grocery shopping destination.
              Fresh products and daily essentials in one place.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/products" className="text-white">
                  Products
                </a>
              </li>

              <li>
                <a href="/about" className="text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Customer Service</h5>

            <p>Contact: support@dailymart.example</p>

            <div className="d-flex gap-3">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
            </div>
          </div>
        </div>

        <hr />

        <p className="text-center mb-0">
          © {new Date().getFullYear()} Daily Mart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;