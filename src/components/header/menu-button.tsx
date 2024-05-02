"use client";

import { useMenuStore } from "@/stores/menu-store";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const iconVariants = {
  initial: { rotate: 180, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  exit: { rotate: -180, opacity: 0 },
};

const MenuButton = () => {
  const open = useMenuStore((state) => state.open);
  const setOpen = useMenuStore((state) => state.setOpen);
  return (
    <motion.button
      onClick={() => setOpen(!open)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-4 block md:hidden"
    >
      <AnimatePresence mode="wait">
        {open ? (
          <motion.span
            key="icon-1"
            className="block"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.125, ease: "linear" }}
          >
            <FiX className="w-8 h-8" />
          </motion.span>
        ) : (
          <motion.span
            key="icon-2"
            className="block"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.125, ease: "linear" }}
          >
            <FiMenu className="w-8 h-8" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default MenuButton;
