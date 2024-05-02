import Logo from "../logo";
import ContactInfo from "./contact-info";
import QuickLinks from "./quick-links";

const FooterTop = () => {
  return (
    <div className="border-b border-white pb-16 md:pb-20 lg:pb-28 grid justify-items-center space-y-8 md:space-y-0 md:justify-items-start md:grid-cols-3 w-full ">
      <Logo />
      <QuickLinks />
      <ContactInfo />
    </div>
  );
};

export default FooterTop;
