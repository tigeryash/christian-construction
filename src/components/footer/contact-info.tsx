import React from "react";
import H3 from "../H3";
import { HiLocationMarker } from "react-icons/hi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="text-center md:text-left">
      <H3>Contact Info</H3>

      <div className="space-y-9 text-lg">
        <div className="flex items-center justify-center md:justify-normal">
          <FaPhoneVolume className="w-4 h-4 md:w-5 md:h-5" />

          <Link href="tel:+11234567890" className="ml-2">
            +1 123 456 7890
          </Link>
        </div>

        <div className="flex items-center justify-center md:justify-normal">
          <MdMarkEmailUnread className="w-4 h-4 md:w-5 md:h-5" />
          <Link href="mailto:example@email.com" className="ml-2 underline">
            Example@email.com{" "}
          </Link>
        </div>

        <div className="flex items-center justify-center md:justify-normal">
          <HiLocationMarker className="w-4 h-4 md:w-5 md:h-5" />
          <Link
            href="https://www.google.com/maps/search/?api=1&query=1234+Street+Name,+City+Name,+State"
            target="_blank"
            className="ml-2"
          >
            1234 Street Name, City Name, State
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
