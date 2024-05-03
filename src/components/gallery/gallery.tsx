import React from "react";
import SectionContainer from "../section-container";
import ImageGallery from "./image-gallery";
import { Button } from "../ui/button";

const Gallery = () => {
  return (
    <SectionContainer
      id="gallery"
      className=" bg-[#f9fafb] w-full flex flex-col items-center"
    >
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-20 ">
        Gallery
      </h2>
      <ImageGallery />
      <Button className="md:p-6 lg:p-8 w-40 md:w-64 lg:w-[30vw] xl:w-[20.5vw] hover:text-white bg-transparent text-black border border-black md:text-lg font-semibold lg:text-2xl rounded-full">
        Show all
      </Button>
    </SectionContainer>
  );
};

export default Gallery;
