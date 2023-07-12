import React from "react";
import "./Footer.css"
import NigeriaIcon from '../../images/Nigeria-Flag-icon-removebg-preview.png'
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
            <li  className="Navlinks-style">Newsroom</li>
            <li  className="Navlinks-style">Jobs</li>
            <li  className="Navlinks-style">Developers</li>
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
  </div>
  );
}

export default Footer;
