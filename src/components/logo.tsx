"use client";

import Image from "next/image";
import LogoImg from "../../public/logo.svg";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.1 }}
      className="flex items-center"
    >
      <Image className="" src={LogoImg} alt="Logo" />
    </motion.div>
  );
};

export default Logo;
