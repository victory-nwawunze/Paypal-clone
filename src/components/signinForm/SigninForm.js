import React from "react";
import "./SigninForm.css";
import PaypalLogo from "../../images/paypal-logo-removebg-preview.png";
import FlagLogo from '../../images/Nigeria-Flag-icon-removebg-preview.png'
import { AiOutlineArrowDown } from "react-icons/ai";
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
        <div className="form-input-container">
          <button className="next-btn-style">Next</button>
        </div>
        <div className="form-input-container">
        <button className="sign-up-btn-style">Sign Up</button>
          </div>
        <div className="form-input-container">
        <div className="form-flag-container-style">
          <div className="form-flag-flex-style">
            <div><img src={FlagLogo} className="icon-Style" /></div>
            <div><AiOutlineArrowDown /></div>
          </div>
        </div>
          </div>
        </div>
      </div>
  );
};

export default SigninForm;
