import React from "react";
import Logo from "../../../images/paypal-logo-removebg-preview.png"
import Navbar from "../../navbar/Navbar";
import BannerLayout from "../BannerLandingPage/BannerLayout";
function HomeLayout() {
  return (
    <div>
        <Navbar logo={Logo} navText="Personal"  LoginBtn="Log in" signUpBtn="Sign up" />
        <BannerLayout />
    </div>
  );
}

export default HomeLayout;
