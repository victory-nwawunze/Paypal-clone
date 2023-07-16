import React from "react";
import "./CheckOutFooter.css"
const CheckOutFooter = () => {
  return (
    <div className="checkOut-footer-container-style">
        <div className="checkout-footer-flex-style">
            <div>
                <p className="footer-copyright-text-style">Copyright © 1999 - 2023 PayPal. All rights reserved.</p>
            </div>
            <div>
                <div className="checkout-footer-link-style">
                    <ul className="checkout-footer-flex-link-style">
                        <li>Privacy statement</li>
                        <li>|</li>
                        <li>Legal agreements</li>
                        <li>|</li>
                        <li>Help</li>
                        <li>|</li>
                        <li>contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckOutFooter;
