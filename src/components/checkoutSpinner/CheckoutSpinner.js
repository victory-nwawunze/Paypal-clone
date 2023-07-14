import React from "react";
import "./CheckoutSpinner.css"
import Spinner from '../../images/images-removebg-preview.png'
const CheckoutSpinner = () => {
  return <div className="spin"><img src={Spinner} /></div>;
}

export default CheckoutSpinner;
