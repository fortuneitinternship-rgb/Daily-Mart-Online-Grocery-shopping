import { Link } from "react-router-dom";
import { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="daily-footer">
      {/* Footer Main Section */}
      <div className="footer-container">
        <div className="footer-row">
          {/* Column 1: Daily Mart */}
          <div className="footer-column">
            <h3>[SPEC] DAILY MART</h3>

            <p>
              Low-fidelity wireframe architectural blueprint for daily
              essentials procurement and inventory fulfillment.
            </p>

            <span className="system-version">SYS_VER: 2.4.0 // SCHEMATIC</span>
          </div>

          {/* Column 2: Customer Service */}
          <div className="footer-column">
            <h3>CUSTOMER SERVICE</h3>

            <ul>
              <li>
                <Link to="/orders">Order Tracking & Status</Link>
              </li>

              <li>
                <Link to="/delivery">Fulfillment & Delivery Specs</Link>
              </li>

              <li>
                <Link to="/returns">Returns & Replacement Policy</Link>
              </li>

              <li>
                <Link to="/contact">Helpdesk Ticketing</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="footer-column">
            <h3>CATEGORIES</h3>

            <ul>
              <li>
                <Link to="/products">01 // Fresh Produce & Greens</Link>
              </li>

              <li>
                <Link to="/products">02 // Dairy & Refrigerated</Link>
              </li>

              <li>
                <Link to="/products">03 // Pantry Staples & Grains</Link>
              </li>

              <li>
                <Link to="/products">04 // Household & Sanitation</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-column newsletter">
            <h3>NEWSLETTER SIGNUP</h3>

            <p>Subscribe to stock alerts and weekly inventory drops.</p>

            <form onSubmit={handleSubscribe}>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="developer@domain.wire"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <button type="submit">SUBMIT</button>
              </div>
            </form>

            {message && <p className="newsletter-message">{message}</p>}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} DAILY MART COMMERCE FRAMEWORK. ALL
            RIGHTS RESERVED. [WIREFRAME VIEW]
          </p>

          <div className="payment-section">
            <span>PAYMENT_SPECS:</span>

            <span className="payment-box">VISA</span>
            <span className="payment-box">MC</span>
            <span className="payment-box">UPI</span>
            <span className="payment-box">COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
