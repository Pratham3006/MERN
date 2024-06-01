import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="form-parent">
      <div className="form">
        <h1 className="form-heading">Please fill the form</h1>
        <div className="form-row">
          <div className="form-row-child">
            <label>First Name:</label>
            <input type="text" name="firstName" required />
          </div>
          <div className="form-row-child">
            <label>Last Name:</label>
            <input type="text" name="lastName" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-child">
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-row-child">
            <label>Gender:</label>
            <label>
              <input type="radio" name="gender" value="male" required />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" required />
              Female
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-child">
            <label>Phone Number:</label>
            <input type="tel" name="phoneNumber" required />
          </div>
          <div className="form-row-child">
            <label>Age:</label>
            <input type="number" name="age" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-child">
            <label>Password:</label>
            <input type="password" name="password" required />
          </div>
          <div className="form-row-child">
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" required />
          </div>
        </div>
        <div className="form-button">
          <button type="submit" className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
}
