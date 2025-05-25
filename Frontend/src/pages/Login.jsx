import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import "../Styles/login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { token } = await login(credentials);
      localStorage.setItem("token", token);
      navigate("/attorneys");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError(err.message || "Login failed");
      }
    }
  };

  return (
    <div className="login-container">
      <h1>Sign in to LawConnect</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button className="google-button">
        <img
          src="https://img.icons8.com/color/16/000000/google-logo.png"
          alt="Google icon"
        />
        Continue with Google
      </button>

      <div className="separator">
        <span>or</span>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-button">
          Log in
        </button>
      </form>

      <div className="footer-links">
        <a href="#">Reset password</a>
      </div>

      <p className="signup-text">
        No account? <a href="/register">Create one</a>
      </p>
    </div>
  );
};

export default Login;
