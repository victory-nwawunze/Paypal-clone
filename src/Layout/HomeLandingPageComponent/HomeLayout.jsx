import React from "react";
import Logo from '../../images/paypal-logo-removebg-preview.png'
import Navbar from '../../components/navbar/Navbar'

import Banner from "../../components/banner/Banner";
import PaypalDesc from "../../components/description/PaypalDesc";
import IndividualImage from '../../images/1-individuals.jpg'
import Learn from "../../components/learnMore/Learn";

function HomeLayout() {
  return (
    <div>
        <Navbar logo={Logo} navText="Personal"  LoginBtn="Log in" signUpBtn="Sign up" />
        <Banner
        headingText="The simpler, safer way to pay online."
        signUpBtnText="Sign up for free"
        businessText="Own a business?"
        openBusinessAcctText="Open a business account."
      />
      <PaypalDesc
      headingText="PayPal is for everyone who pays online."
      img={IndividualImage}
      headingDescriptionText="Individuals"
      reasonText="Find out why we have more than 200M active accounts worldwide."
      learnMoreBtn="learn more"
       />
      <Learn />
    </div>
  );
}

export default HomeLayout;
