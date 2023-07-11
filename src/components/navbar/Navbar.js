import React from "react";

import "./Navbar.css"
import { AiOutlineDown } from 'react-icons/ai';
const Navbar = (props) => {
    const {logo,navText,IconArrD ,LoginBtn,signUpBtn} = props
    console.log(IconArrD)
  return (
    <div>
        <div className="navbar-container-style">
            <div className="navbar-flex-style">
                <img src={logo} className="Logo-style" alt="Logo" />
                <ul className="navbar-link">
                    <li>{navText}</li>
                    <AiOutlineDown className="Down-Icon-style" alt="Down-icon" />
                </ul>
                <div className="navbar-btn-container-style">
                        <div className="navbar-btn-flex-style">
                            <button className="login-btn-style">{LoginBtn}</button>
                            <button className="sign-up-btn-style">{signUpBtn}</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
