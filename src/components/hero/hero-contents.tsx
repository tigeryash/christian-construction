"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const HeroContents = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-2 text-center md:mb-4 text-4xl font-bold md:text-7xl"
      >
        {`Christian's Contruction`}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className=" text-center text-xl  md:text-3xl "
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </motion.p>
      <div className="mt-8 space-y-8 md:space-x-10 md:space-y-0 flex flex-col md:flex-row">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          href="#contact"
          className="px-8 py-3 text-lg font-bold text-black bg-white rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        >
          Contact Me
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          href="#"
          className="px-8 py-3 text-lg text-center font-bold text-black bg-white/30 border hover:bg-white rounded-full transition-all duration-300 ease-in-out"
        >
          Call Now
        </motion.a>
      </div>
    </motion.div>
  );
};
export default HeroContents;
