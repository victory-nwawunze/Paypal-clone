import React from "react";
import "./Learn.css"
import CardOneImage from '../../images/buyonline_browser1.png'
import CardTwoImage from "../../images/buyonline_browser2.png"
import CardThreeImage from '../../images/buyonline_browser3.png'
import { AiOutlineArrowRight } from "react-icons/ai";
const Learn = () => {
  return (
    <div className="Learn-container-style">
    <h2 className="learning-heading-style">PayPal connects buyers and sellers.</h2>
    <p className="buyer-text-styles">For buyers</p>
    {/* Card Img and Icon */}
    <div className="learning-card-container-style">
    <div className="learning-card-flex-style">
    <div className="learning-card-one-container-style">
      <div className="learning-card-one-flex-style">
        <div><img src={CardOneImage} /></div>
        <AiOutlineArrowRight size={80} className="Righ-iconstyle" />
      </div>
    </div>
    <div className="learning-card-one-container-style">
      <div className="learning-card-one-flex-style">
        <div><img src={CardTwoImage} /></div>
        <AiOutlineArrowRight size={80} className="Righ-iconstyle" />
      </div>
    </div>
    <div className="learning-card-one-container-style">
      <div className="learning-card-one-flex-style">
        <div><img src={CardThreeImage} /></div>
      </div>
    </div>
    </div>
    </div>
    {/* Card Text */}
    <div className="learning-card-text-container-style">
      <div className="learning-card-text-flex-style">
        <div className="textOne-container-style">
          <div className="textOne-flex-style">
            <div><span className="textNumberOne-style">1</span></div>
            <div><p className="textOne-style"><span>Sign up</span> with just an email address and <br /> password.</p></div>
          </div>
        </div>
        <div className="textOne-container-style">
          <div className="textOne-flex-style">
            <div><span className="textNumberOne-style">2</span></div>
            <div><p className="textOne-style">Securely add your cards.</p></div>
          </div>
        </div>
        <div className="textOne-container-style">
          <div className="textOne-flex-style">
            <div><span className="textNumberOne-style">1</span></div>
            <div><p className="textOne-style">Use the PayPal button to check out with <br />just an email address and password.</p></div>
          </div>
        </div>
      </div>
    </div>
   {/* Learn More Btn */}
   <div className="LearnMoreBtn-container-style">
    <button>Learn more</button>
   </div>
  </div>
  )
}

export default Learn;
