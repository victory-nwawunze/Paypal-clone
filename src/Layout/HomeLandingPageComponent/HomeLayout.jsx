import React from "react";
import Logo from "../../images/paypal-logo-removebg-preview.png";
import Navbar from "../../components/navbar/Navbar";

import Banner from "../../components/banner/Banner";
import PaypalDesc from "../../components/description/PaypalDesc";
import IndividualImage from "../../images/1-individuals.jpg";
import Learn from "../../components/learnMore/Learn";
import CardOne from "../../images/buyonline_browser1.png";
import CardTwo from "../../images/buyonline_browser2.png";
import CardThree from "../../images/buyonline_browser3.png";
import CustomersBanner from "../../components/customersBannerComponent/CustomersBanner";
import Getstarted from "../../components/getStartedBanner/Getstarted";
import Footer from "../../components/footer/Footer";

function HomeLayout() {
  return (
    <div>
      <Navbar
        logo={Logo}
        navText="Personal"
        LoginBtn="Log in"
        signUpBtn="Sign up"
      />
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
      <Learn
        learningHeadingText="PayPal connects buyers and sellers."
        learningHeadingDesc="For buyers"
        btnText="Learn more"
        cardOneImg ={CardOne}
        cardTwoImg ={CardTwo}
        cardThreeImg ={CardThree}
        countNumOne = "1"
        signUpText = "Sign up"
        title ="with just an email address and"
        passwordText="password."
        countNumTwo = "2"
        secureText ="Securely add your cards."
        countNumThree = "3"
        headignThree ="Use the PayPal button to check out with
                  "
                  moreHeadingThreeText="just an email address and password."
      />
      <CustomersBanner
      bannerText={`Join 200M 
       active PayPal  accounts worldwide.`}
      heading = "Safer and protected"
       />
       <Getstarted 
        contentText="Sign up and get started."
        btnText="Get started"
       />
       <Footer />
    </div>
  );
}

export default HomeLayout;
