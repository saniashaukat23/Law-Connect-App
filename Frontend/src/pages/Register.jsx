import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);
    try {
      const { token } = await register(formData);
      localStorage.setItem("token", token);
      navigate("/profiles");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        setError(err.response.data.msg);
      } else {
        setError(err.message || "Failed to register. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Get Yourself Registered</h1>
      <h5>At LawConnect</h5>

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
      <form onSubmit={handleSubmit} className="login-form">
        <label>Username</label>
        <input
          type="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          disabled={loading}
        />

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;
