import React from "react";
import "./PaypalDesc.css";

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
      <button>{learnMoreBtn}</button>
    </div>
  );
};

export default PaypalDesc;
