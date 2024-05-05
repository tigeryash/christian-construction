import { useInView } from "framer-motion";
import { useRef } from "react";

export function useIsInView() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    once: true,
  });
  return { ref, isInView };
}
