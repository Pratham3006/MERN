import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phoneNumber: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/data", formData);
      console.log(response.data);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div className="form-parent">
      <div className="form">
        <h1 className="form-heading">Please fill the form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-row-child">
              <label>First Name:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-row-child">
              <label>Last Name:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-child">
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-row-child">
              <label>Gender:</label>
              <label>
                <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} required />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} required />
                Female
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-child">
              <label>Phone Number:</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </div>
            <div className="form-row-child">
              <label>Age:</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-child">
              <label>Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-row-child">
              <label>Confirm Password:</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-button">
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
