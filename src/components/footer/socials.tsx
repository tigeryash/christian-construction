import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex justify-center space-x-1 md:space-x-3 lg:space-x-5 ">
      <Link
        href="#"
        className="group p-1 md:p-2 lg:p-4 rounded-full border hover:scale-[1.3] flex items-center justify-center hover:bg-white hover:border-black transition-all duration-300"
      >
        <FaFacebookF className="group-hover:text-black lg:w-7 lg:h-7 text-white" />
      </Link>

      <Link
        href="#"
        className="group p-1 md:p-2 lg:p-4 rounded-full border hover:scale-[1.3] flex items-center justify-center hover:bg-white hover:border-black transition-all duration-300"
      >
        <InstagramLogoIcon className="group-hover:text-black lg:w-7 lg:h-7 text-white" />
      </Link>

      <Link
        href="#"
        className="group p-1 md:p-2 lg:p-4 rounded-full border hover:scale-[1.3] flex items-center justify-center hover:bg-white hover:border-black transition-all duration-300"
      >
        <LinkedInLogoIcon className="group-hover:text-black lg:w-7 lg:h-7 text-white" />
      </Link>

      <Link
        href="#"
        className="group p-1 md:p-2 lg:p-4 rounded-full border hover:scale-[1.3] flex items-center justify-center hover:bg-white hover:border-black transition-all duration-300"
      >
        <BsTwitterX className="group-hover:text-black lg:w-7 lg:h-7 text-white" />
      </Link>
    </div>
  );
};

export default Socials;
