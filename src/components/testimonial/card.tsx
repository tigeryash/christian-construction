"use client";

import { useTestimonialStore } from "@/stores/testimonial-store";
import { motion } from "framer-motion";

type CardProps = {
  description: string;
  name: string;
  title: string;
  position: number;
};

const Card = ({ description, name, title, position }: CardProps) => {
  const selected = useTestimonialStore((state) => state.selected);
  const setSelected = useTestimonialStore((state) => state.setSelected);

  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? "black" : "white";
  const color = position % 2 ? "white" : "black";
  const firstLetters = name.split(" ").map((word) => word[0]);

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
        background,
        color,
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between"
    >
      <div
        className={`flex items-center justify-between mx-auto rounded-full p-5 bg-${color}`}
      >
        <span className={`text-2xl font-bold text-${background}`}>
          {firstLetters.join("")}
        </span>
      </div>
      <p className="text-lg lg:text-xl font-light italic my-8">
        {`"${description}"`}
      </p>
      <div>
        <span className="block font-semibold text-lg">{name}</span>
        <span className="block text-sm">{title}</span>
      </div>
    </motion.div>
  );
};

export default Card;
