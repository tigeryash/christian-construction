"use client";

import { links } from "@/lib/constants";
import NavLink from "./nav-link";
import { motion } from "framer-motion";
const NavList = () => {
  return (
    <ul className="hidden md:flex gap-10 text-center justify-center">
      {links.map((link, idx) => (
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: idx * 0.1 }}
          key={link.href}
        >
          <NavLink href={link.href}>{link.label}</NavLink>
        </motion.li>
      ))}
    </ul>
  );
};

export default NavList;
