import React from "react";
import "./Banner.css";
const Banner = (props) => {
  const { headingText, signUpBtnText, businessText, openBusinessAcctText } =
    props;
  console.log(props);
  return (
    <div className="banner-Bg-Img-style">
      <h3 className="banner-heading-style">
        {headingText}
      </h3>
      <button className="signUp-Btn-style">{signUpBtnText}</button>
      <h5 className="Business-acct-btn-style">
        {businessText}<span>{openBusinessAcctText}</span>
      </h5>
    </div>
  );
};

export default Banner;
