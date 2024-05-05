"use client";

import { motion } from "framer-motion";
import { useIsInView } from "@/lib/hooks";

const AboutInfo = () => {
  const { ref, isInView } = useIsInView();
  return (
    <div ref={ref}>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={isInView && { opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl lg:text-[2.75rem] xl:text-5xl md:text-6xl font-extrabold mb-12 md:pr-8"
      >
        Your Specialist in Construction
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={isInView && { opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl xl:text-xl md:text-[1rem] leading-loose md:pr-8 xl:pr-40"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
        perspiciatis ab consequatur facere illum accusamus itaque? Iure
        doloribus velit harum quam et! Nisi, ab ratione. Vero ut commodi debitis
        facere?
      </motion.p>
    </div>
  );
};

export default AboutInfo;
