import React from "react";
import "./Learn.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { contentData } from "../../constances/api";
const Learn = (props) => {
  // console.log(contentData);
  const text = 'Use the PayPal button to check out with \n just an email address and password.'
  console.log(Text)
  const {
    learningHeadingText,
    learningHeadingDesc,
    btnText,
    cardOneImg,
    cardTwoImg,
    cardThreeImg,
    countNumOne,
    signUpText,
    title,
    countNumTwo,
    passwordText,
    secureText,
    countNumThree,
    headignThree,
    moreHeadingThreeText
  } = props;
  console.log(props)
  return (
    <div className="Learn-container-style">
      <h2 className="learning-heading-style">{learningHeadingText}</h2>
      <p className="buyer-text-styles">{learningHeadingDesc}</p>
      {/* Card Img and Icon */}

      <div className="learning-card-container-style">
        <div className="learning-card-flex-style">
          <div className="learning-card-one-container-style">
            <div className="learning-card-one-flex-style">
              <div>
                <img src={cardOneImg} />
              </div>
              <AiOutlineArrowRight size={80} className="Righ-iconstyle" />
            </div>
          </div>
          <div className="learning-card-one-container-style">
            <div className="learning-card-one-flex-style">
              <div>
                <img src={cardTwoImg} />
              </div>
              <AiOutlineArrowRight size={80} className="Righ-iconstyle" />
            </div>
          </div>
          <div className="learning-card-one-container-style">
            <div className="learning-card-one-flex-style">
              <div>
                <img src={cardThreeImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card Text */}
      <div className="learning-card-text-container-style">
        <div className="learning-card-text-flex-style">
          <div className="textOne-container-style">
            <div className="textOne-flex-style">
              <div>
                <span className="textNumberOne-style">{countNumOne}</span>
              </div>
              <div>
                <p className="textOne-style">
                  <span>{signUpText}</span> {title} <br /> {passwordText}</p>
              </div>
            </div>
          </div>
          <div className="textOne-container-style">
            <div className="textOne-flex-style">
              <div>
                <span className="textNumberOne-style">{countNumTwo}</span>
              </div>
              <div>
                <p className="textOne-style">{secureText}</p>
              </div>
            </div>
          </div>
          <div className="textOne-container-style">
            <div className="textOne-flex-style">
              <div>
                <span className="textNumberOne-style">{countNumThree}</span>
              </div>
              <div>
                <p className="textOne-style">
                {headignThree}<br />{moreHeadingThreeText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Learn More Btn */}
      <div className="LearnMoreBtn-container-style">
        <button>{btnText}</button>
      </div>
    </div>
  );
};

export default Learn;
