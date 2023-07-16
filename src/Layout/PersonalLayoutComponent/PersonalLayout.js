import React from "react";
import PersonalBannerComponent from "../../components/personalBanner/PersonalBannerComponent";
import Navbar from "../../components/navbar/Navbar";
import Logo from '../../images/paypal-logo-removebg-preview.png'
import Banner from "../../components/banner/Banner";
import PersonalText from "../../components/PersonalTextComponent/PersonalText";

const PersonalLayout = () => {
  return(
    <div>
    <Navbar
      logo={Logo}
        navText="Personal"
        LoginBtn="Log in"
        signUpBtn="Sign up"
     />
    <PersonalBannerComponent />
    <PersonalText />
    </div>
  )
}

export default PersonalLayout;
