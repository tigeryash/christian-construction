"use client";

import { useMenuStore } from "@/stores/menu-store";
import { useMotionValueEvent, useScroll } from "framer-motion";

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
  const scrolled = useMenuStore((state) => state.scrolled);
  const setScrolled = useMenuStore((state) => state.setScrolled);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <header
      className={`fixed flex top-0 z-50 w-full px-6 
    transition-all duration-300 ease-out lg:px-32 md:px-16 justify-between
    ${
      scrolled
        ? "bg-neutral-950 py-3 shadow-xl text-white"
        : "bg-neutral-950/0 py-6 shadow-none"
    }`}
    >
      {children}
    </header>
  );
};

export default HeaderContainer;
