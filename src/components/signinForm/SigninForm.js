import React from "react";
import "./SigninForm.css";
import PaypalLogo from "../../images/paypal-logo-removebg-preview.png";
const SigninForm = () => {
  return (
    <div className="signInForm-container-style">
      <div className="signInForm-style">
        <img src={PaypalLogo} alt="Paypal-Logo" className="Logo-style" />
        <div className="form-input-container">
          <input placeholder="Email or mobile number" className="input-style" />
        </div>
        <div className="form-input-container">
        <button className="forget-email-btn-style">Forget email ?</button>
        </div>
          
      </div>
    </div>
  );
};

export default SigninForm;
