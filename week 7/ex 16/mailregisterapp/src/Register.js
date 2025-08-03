import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change (controlled components)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate fields
  const validate = () => {
    const newErrors = {};
    if (formData.name.length < 5) {
      newErrors.name = "Name must be at least 5 characters long";
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Email must contain @ and .";
    }
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      alert("Form Submitted Successfully");
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>Register</button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h3>Registered Details</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
}

export default Register;
