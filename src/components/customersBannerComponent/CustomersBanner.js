import React from "react";
import "./CustomersBanner.css";
const CustomersBanner = () => {
  return (
    <div>
      <div className="CustomerHeadingBanner-style">
        <h2 className="heading-text-style">Join 200M active PayPal accounts worldwide.</h2>
      <div className="customerHeadingBanner-container-style">
        <div className="customerHeadingBannerText-flex-style">
          <div>
            <h3 className="heading-style">Safer and protected</h3>
            <p className="text-description-style">
              Shop with peace of mind. We don’t share your full financial
              information with <br />
              sellers. And PayPal Buyer Protection covers your eligible
              purchases if they don’t <br />
              show up or match their description.
            </p>
            <button className="btn-style">More about security</button>
          </div>
          <div>
            <h3 className="heading-style">Mostly free, always upfront</h3>
          <p className="text-description-style">
              Shop with peace of mind. We don’t share your full financial
              information with <br />
              sellers. And PayPal Buyer Protection covers your eligible
              purchases if they don’t <br />
              show up or match their description.
            </p>
            <button className="btn-style">More about security</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CustomersBanner;
