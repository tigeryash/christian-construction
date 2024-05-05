"use client";
import { images } from "@/lib/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useIsInView } from "@/lib/hooks";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const ImageGallery = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const { ref, isInView } = useIsInView();

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === images.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div
      ref={ref}
      className="relative w-full lg:grid 
     lg:grid-cols-4 lg:gap-8 lg:w-full lg:justify-items-center mb-14 overflow-hidden lg:overflow-visible"
    >
      {images.map((image, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          key={image.id}
        >
          <Image
            className="hidden hover:scale-[1.1] lg:block rounded-lg aspect-square w-full h-auto object-cover transition duration-300"
            src={image.src}
            alt="gallery img"
            width={300}
            height={150}
          />
        </motion.div>
      ))}

      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing w-full lg:hidden"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

export default ImageGallery;

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {images.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-square w-full h-auto shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {images.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors lg:hidden ${
              idx === imgIndex ? "bg-black" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};
