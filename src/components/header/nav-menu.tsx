"use client";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import NavLink from "./nav-link";
import { useMenuStore } from "@/stores/menu-store";
import { cn } from "@/lib/utils";

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const NavMenu = () => {
  const open = useMenuStore((state) => state.open);
  const scrolled = useMenuStore((state) => state.scrolled);
  return (
    <motion.ul
      variants={menuVariants}
      initial="closed"
      animate={open ? "open" : "closed"}
      className={cn(
        "absolute p-4 bg-neutral-950/80 shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4 ",
        {
          "bg-neutral-950": scrolled,
        }
      )}
    >
      {links.map((link) => (
        <motion.li
          variants={menuLinkVariants}
          className="ml-auto pr-6"
          key={link.href}
        >
          <NavLink href={link.href} label={link.label}>
            {link.label}
          </NavLink>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavMenu;
