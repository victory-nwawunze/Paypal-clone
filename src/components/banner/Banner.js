import React from "react";
import "./Banner.css";
import {Link} from "react-router-dom"
const Banner = (props) => {
  const { headingText, signUpBtnText, businessText, openBusinessAcctText } =
    props;
  return (
    <div className="banner-Bg-Img-style">
      <h3 className="banner-heading-style">
        {headingText}
      </h3>
      <Link to="/signUp" className="signUp-Btn-style">{signUpBtnText}</Link>
      <h5 className="Business-acct-btn-style">
        {businessText}<Link to="/checkOutForm" className="styl-link">{openBusinessAcctText}</Link>
      </h5>
    </div>
  );
};

export default Banner;
