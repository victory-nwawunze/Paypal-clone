import React from "react";
import "./SignUpNavbar.css";
import CountryFlag from "../../images/Nigeria-Flag-icon-removebg-preview.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import PaypalLogo from "../../images/paypal-logo-removebg-preview.png";
function Signupnavbar() {
  return (
    <div className="Sign-up-navbar-container-style">
      <div className="signUp-navbar-container-flex">
        <div className="flag-style-flex">
          <div>
            <img src={CountryFlag} className="logo-size" />
          </div>
          <div>
            <AiOutlineArrowDown className="Icon-size" />
          </div>
        </div>
        <div>
          <div>
            <img src={PaypalLogo} className="Paypal-logo" />
          </div>
        </div>
        <div>
          <div>
            <p className="login-style">Log in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signupnavbar;
