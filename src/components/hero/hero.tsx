import StickyImage from "./hero-image";
import HeroContents from "./hero-contents";

const bgUrl =
  "https://images.unsplash.com/photo-1516174881421-64f2583616a6?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Hero = () => {
  return (
    <div id="home" className="relative h-[80vh] w-full">
      <StickyImage />
      <HeroContents />
    </div>
  );
};

export default Hero;
