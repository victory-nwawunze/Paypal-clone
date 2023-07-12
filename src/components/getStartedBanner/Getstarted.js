import React from "react";
import "./Getstarted.css";
const Getstarted = (props) => {
  const {contentText,btnText} = props
  return (
    <div className="get-started-container-style">
      <h2>{contentText}</h2>
      <button>{btnText}</button>
    </div>
  );
};

export default Getstarted;
