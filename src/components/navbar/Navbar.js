import React from "react";
import Logo from '../../images/paypal-logo-removebg-preview.png'
import "./Navbar.css"
function Navbar() {
  return (
    <div>
        <div className="navbar-container-style">
            <div className="navbar-flex-style">
                <img src={Logo} className="Logo-style" alt="Logo" />
                <ul>
                    <li>Personal</li>
                </ul>
                <div className="navbar-btn-container-style">
                        <div className="navbar-btn-flex-style">
                            <button>Login</button>
                            <button>Sign up</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
