import { Link } from "react-router-dom";

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(
      "Registration UI demo only. Account creation is not connected yet.",
    );
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h1 className="h3 text-center text-success mb-4">
                Create Account
              </h1>
              <form onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="registerName">
                  Full Name
                </label>
                <input
                  id="registerName"
                  className="form-control mb-3"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
                <label className="form-label" htmlFor="registerEmail">
                  Email
                </label>
                <input
                  id="registerEmail"
                  className="form-control mb-3"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
                <input
                  id="registerPassword"
                  className="form-control mb-3"
                  type="password"
                  minLength="6"
                  placeholder="Create a password"
                  required
                />
                <button className="btn btn-success w-100" type="submit">
                  Register
                </button>
              </form>
              <p className="text-center mt-3 mb-0">
                Already registered? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
