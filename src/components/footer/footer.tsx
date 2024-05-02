import FooterBottom from "./footer-bottom";
import FooterTop from "./footer-top";

const Footer = () => {
  return (
    <footer className="bg-black px-6 md:px-16 lg:px-32 py-8 md:py-12 lg:py-24 rounded-t-3xl text-white">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
