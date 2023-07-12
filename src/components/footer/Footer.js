import React from "react";
import "./Footer.css";
import NigeriaIcon from "../../images/Nigeria-Flag-icon-removebg-preview.png";
function Footer() {
  return (
    <div className="footer-container-style">
      <div className="footer-flex-style">
        <ul className="flex-text">
          <li>Help</li>
          <li className="space-text-style">Contact</li>
          <li className="space-text-style">fees</li>
          <li className="space-text-style">security</li>
          <li className="space-text-style">features</li>
          <li className="space-text-style">shops</li>
        </ul>
        <img src={NigeriaIcon} className="Icon-style" />
      </div>
      <hr />
      <div className="text-footer-container-style">
        <div className="flex-text-container">
          <div>
            <ul className="flex-footer-navLinks">
              <li className="about-style">About</li>
              <li className="Navlinks-style">Newsroom</li>
              <li className="Navlinks-style">Jobs</li>
              <li className="Navlinks-style">Developers</li>
            </ul>
          </div>
          <div className="footer-copyright-links-container-style">
            <ul className="flex-copyrights-links-style">
              <li>© 1999–2023 All rights reserved.</li>
              <li>Accessibility</li>
              <li>Developers</li>
              <li>Cookies</li>
              <li>Privacy</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="paypal-footer-text-container-style">
        <p>
          PayPal Pte. Ltd. (“3PL”) has applied for a license under the Singapore
          Payment Services Act (“PS Act”) with the Monetary Authority of
          Singapore. During this statutory transitional period, 3PL is operating
          under an exemption from holding a license and is allowed to continue
          to provide specific payment services.
        </p>
      </div>
    </div>
  );
}

export default Footer;
