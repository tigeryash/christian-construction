import React from "react";
import Socials from "./socials";

const FooterBottom = () => {
  return (
    <div className="flex justify-between items-center mt-8 md:mt-12">
      <p className="lg:text-lg text-xs md:text-base">
        Copyright &#169; 2024. All Rights Reserved
      </p>

      <Socials />
    </div>
  );
};

export default FooterBottom;
