import React from "react";
import './CheckOutNavbar.css'
import PaypalLogo from '../../images/paypal-logo-removebg-preview.png'
import {Link} from 'react-router-dom'
function CheckOutNavbar() {
  return(
    <div className="checkoutNavbar-style">
    <Link to="/"><img src={PaypalLogo} className="paypal-style" /></Link>
    </div>
  )
}

export default CheckOutNavbar;
