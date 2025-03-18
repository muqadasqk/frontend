import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "./authService"; 
import InputField from "../../../components/inputField"; // ✅ Import InputField Component
import Button from "../../../components/button";// ✅ Import Button Component

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    nic: "",
    role: "",
    rollNo: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const { name, email, contact, nic, role, rollNo, password } = formData;
      const requestData = { name, email, contact, nic, role, password };
      if (role === "student") requestData.rollNo = rollNo;

      await signup(requestData);
      setSuccess("Signup successful! Please verify your email.");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 my-container">
      <div className="bg-white shadow-sm rounded p-4 my-form">
        <h2 className="text-center text-success mb-5 mt-2 fw-bold fs-3">Sign Up</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <InputField id="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <InputField id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <InputField id="contact" type="text" placeholder="Enter your contact number" value={formData.contact} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <InputField id="nic" type="text" placeholder="Enter your CNIC" value={formData.nic} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <select id="role" className="form-select input-field" value={formData.role} onChange={handleChange} required>
                <option value="" disabled>Select role</option>
                <option value="supervisor">Supervisor</option>
                <option value="student">Student</option>
              </select>
            </div>
            {formData.role === "student" && (
              <div className="col-md-6">
                <InputField id="rollNo" type="text" placeholder="Enter your roll number" value={formData.rollNo} onChange={handleChange} />
              </div>
            )}
            <div className="col-md-6">
              <InputField id="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
            </div>
          </div>
          <div className="d-grid mt-4">
            <Button type="submit" text="Sign Up" loading={loading} />
          </div>
          <div className="text-center mt-3 mb-3">
            <span>Have an Account? </span>
            <Link to="/login" className="text-success text-decoration-none">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
