import React, { useState, useEffect } from "react";
import axios from "axios";

const AUTHENTICATE_URL = "http://localhost:8181/auth-api/authenticate";
const UserLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData + "after setting formdata");
    try {
      const response = await axios.post(
         AUTHENTICATE_URL,
        formData
      );
      console.log("Form data submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserLogin;
