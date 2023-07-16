import React from "react";
import "./PaypalDesc.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PaypalDesc = (props) => {
  const { headingText, img, headingDescriptionText, reasonText, learnMoreBtn } =
    props;
  return (
    <div className="individual-styles">
      <h4>{headingText}</h4>
      <img
        src={img}
        alt="Individual Image"
        className="Individual-Img-style"
      />
      <h5>{headingDescriptionText}</h5>
      <p>{reasonText}</p>
      <Link to="/personalLayout" className="LearnMore-Btn">{learnMoreBtn}</Link>
    </div>
  );
};

export default PaypalDesc;
