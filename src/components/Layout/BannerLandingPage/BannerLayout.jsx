import React from "react";
import Banner from "../../banner/Banner";

const BannerLayout = () => {
  return (
    <div>
      <Banner
        headingText="The simpler, safer way to pay online."
        signUpBtnText="Sign up for free"
        businessText="Own a business?"
        openBusinessAcctText="Open a business account."
      />
    </div>
  );
}

export default BannerLayout;
