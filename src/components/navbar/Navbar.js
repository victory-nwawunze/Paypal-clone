import React from "react";
import Logo from '../../images/paypal-logo-removebg-preview.png'
import "./Navbar.css"
import { AiOutlineDown } from 'react-icons/ai';
function Navbar() {
  return (
    <div>
        <div className="navbar-container-style">
            <div className="navbar-flex-style">
                <img src={Logo} className="Logo-style" alt="Logo" />
                <ul className="navbar-link">
                    <li>Personal</li>
                    <AiOutlineDown className="Down-Icon-style" alt="Down-icon" />
                </ul>
                <div className="navbar-btn-container-style">
                        <div className="navbar-btn-flex-style">
                            <button className="login-btn-style">Log in</button>
                            <button className="sign-up-btn-style">Sign up</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
