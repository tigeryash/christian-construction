"use client";

import { testimonials } from "@/lib/data";
import { useTestimonialStore } from "@/stores/testimonial-store";
import { motion } from "framer-motion";

const SelectBtns = () => {
  const selected = useTestimonialStore((state) => state.selected);
  const setSelected = useTestimonialStore((state) => state.setSelected);
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(testimonials.length).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(
                    selected === testimonials.length - 1 ? 0 : selected + 1
                  );
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default SelectBtns;
