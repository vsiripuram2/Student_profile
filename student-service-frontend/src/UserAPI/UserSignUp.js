import React,{useState,useEffect} from "react";
import axios from "axios";

const UserSignUp = () => {
  const BASE_API_URL = "http://localhost:8181/user-api";
  const USER_REGISTER_URL = "/createUser";

  const [formData, setFormData] = useState({
    id: 0,
    username: "",
    password: "",
    email: "",
    roles: "",
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
        BASE_API_URL + USER_REGISTER_URL,
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
        <label htmlFor="password">password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="roles">Roles:</label>
        <input
          type="text"
          id="roles"
          name="roles"
          value={formData.roles}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
};
export default UserSignUp;
