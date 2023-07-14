import React from "react";
import './CheckOutNavbar.css'
import PaypalLogo from '../../images/paypal-logo-removebg-preview.png'
function CheckOutNavbar() {
  return(
    <div className="checkoutNavbar-style">
    <img src={PaypalLogo} className="paypal-style" />
    </div>
  )
}

export default CheckOutNavbar;
