import { Link } from "react-router-dom";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Login UI demo only. Authentication is not connected yet.");
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h1 className="h3 text-center text-success mb-4">
                Welcome Back!
              </h1>
              <form onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="loginEmail">
                  Email
                </label>
                <input
                  id="loginEmail"
                  className="form-control mb-3"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
                <input
                  id="loginPassword"
                  className="form-control mb-3"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <button className="btn btn-success w-100" type="submit">
                  Login
                </button>
              </form>
              <p className="text-center mt-3 mb-0">
                New to Daily Mart? <Link to="/register">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
