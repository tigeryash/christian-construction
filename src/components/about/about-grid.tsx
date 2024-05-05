"use client";
import { FaFireAlt } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { GiBrickWall } from "react-icons/gi";
import { BsDoorOpenFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useIsInView } from "@/lib/hooks";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AboutGrid = () => {
  const { ref, isInView } = useIsInView();
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className="content-grid  lg:border-b"
      >
        <FaFireAlt className="text-4xl text-red-500" />
        <h4 className="text-xl font-semibold">Fire Protection</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          accusamus nihil hic
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ delay: 0.2 }}
        className="content-grid lg:border-l lg:border-b"
      >
        <AiFillSound className="text-4xl text-green-500" />
        <h4 className="text-xl font-semibold">Acoustics</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          accusamus nihil hic
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ delay: 0.4 }}
        className="content-grid  "
      >
        <GiBrickWall className="text-4xl text-blue-500" />
        <h4 className="text-xl font-semibold">Dry Wall</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          accusamus nihil hic
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ delay: 0.6 }}
        className="content-grid  lg:border-l"
      >
        <BsDoorOpenFill className="text-4xl text-yellow-500" />
        <h4 className="text-xl font-semibold">Interior</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          accusamus nihil hic
        </p>
      </motion.div>
    </div>
  );
};

export default AboutGrid;
