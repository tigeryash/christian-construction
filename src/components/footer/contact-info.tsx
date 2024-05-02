import React from "react";
import H3 from "../H3";
import { HiLocationMarker } from "react-icons/hi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="text-center md:text-left">
      <H3>Contact Info</H3>

      <div className="space-y-9">
        <div className="flex items-center justify-center md:justify-normal">
          <FaPhoneVolume />

          <span className="ml-2">+1 123 456 7890</span>
        </div>

        <div className="flex items-center justify-center md:justify-normal">
          <MdMarkEmailUnread />
          <span className="ml-2 underline">Example@email.com </span>
        </div>

        <div className="flex items-center justify-center md:justify-normal">
          <HiLocationMarker />
          <span className="ml-2">1234 Street Name, City Name, State</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
