import React from "react";
import "./CustomersBanner.css";
import {bannerText} from '../../constances/api'

const CustomersBanner = (props) => {
   const {bannerText,heading} = props
  return (
    <div>
      <div className="CustomerHeadingBanner-style">
        <h2 className="heading-text-style">{bannerText}</h2>
      <div className="customerHeadingBanner-container-style">
        <div className="customerHeadingBannerText-flex-style">
          <div>
            <h3 className="heading-style">{heading}</h3>
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
            <button className="btn-style">More about fees</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CustomersBanner;
