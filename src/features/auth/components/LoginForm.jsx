import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import InputField from "../../../components/inputField"; // ✅ Import Reusable InputField
import Button from "../../../components/button"; // ✅ Import Reusable Button

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    navigate("/dashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 my-container">
      <div className="bg-white shadow-sm rounded p-4 inner-form form">
        <h2 className="text-center text-success mb-5 mt-4 fw-bold fs-3">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <InputField id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <InputField id="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="d-flex align-items-center justify-content-between ms-auto mb-3 w-100">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <a href="/updatepassword" className="text-muted small">Forgot Password?</a>
          </div>

          <div className="d-grid">
            <Button type="submit" text="Sign In" />
          </div>

          {/* Signup Link */}
          <div className="text-center mt-4">
            <span>Don't have an Account? </span>
            <a href="/signup" className="text-success mb-4 text-decoration-none">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
