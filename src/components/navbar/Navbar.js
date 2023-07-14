import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"
import { AiOutlineDown } from 'react-icons/ai';
const Navbar = (props) => {
    const {logo,navText,LoginBtn,signUpBtn} = props
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
                            <Link to="/signIn" className="login-btn-style">{LoginBtn}</Link>
                            <Link to="/signUp" className="Nav-sign-up-btn-style">{signUpBtn}</Link>
                        </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
