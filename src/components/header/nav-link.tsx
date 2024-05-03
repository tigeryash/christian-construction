"use client";
import { cn } from "@/lib/utils";
import { useMenuStore } from "@/stores/menu-store";
import Link from "next/link";
import React, { useState } from "react";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  label: string;
};

const NavLink = ({ children, href, label }: NavLinkProps) => {
  const scrolled = useMenuStore((state) => state.scrolled);
  const setOpen = useMenuStore((state) => state.setOpen);

  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      onClick={() => {
        setOpen(false);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative text-lg"
    >
      {children}
      <span
        style={{
          transform: hover ? "scaleX(1)" : "scaleX(0)",
        }}
        className={cn(
          "absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out",
          {
            "bg-white": scrolled,
          }
        )}
      />
    </Link>
  );
};

export default NavLink;
