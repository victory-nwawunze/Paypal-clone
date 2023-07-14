import React, { useEffect, useState } from "react";
import "./CheckOutForm.css";
import CheckoutSpinner from "../checkoutSpinner/CheckoutSpinner";
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
        <div className="checkout-container-style">
          <h1>Hello</h1>
        </div>
      )}
    </div>
  );
};

export default CheckOutForm;
