import React, { useEffect, useState } from "react";
import "./CheckOutForm.css";
import CheckoutSpinner from "../checkoutSpinner/CheckoutSpinner";
import MyPaypal from '../../images/myPaypal-removebg-preview.png'
const CheckOutForm = () => {
    // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set Loading Time
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // Clean up functions
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div>
      {isLoading ? (
        <CheckoutSpinner />
      ) : (
        <div className="checkout-bg">
       <div className="checkout-form">
        <img src={MyPaypal} alt="MyPaypal-Logo" className="MyPaypal-style"/>
        <h2 className="checkout-signUp-text">Sign up for a Business <br />account</h2>
        <p className="checkout-text-style">Enter the email address you’ll use to sign up<br /> or log in</p>
        <input
                  placeholder="Email Adress"
                  className="Checkout-signUp-input-style"
                />
                <button className="continue-btn-style">Continue</button>
       </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutForm;
