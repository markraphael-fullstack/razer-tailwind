import React from "react";
import CarouselImage from "../carousel-image";

const Carousel = () => {
  return (
    <div className="bg-night text-white pb-10">
      <div className="max-w-[69.5rem] mx-auto">
        <hr className="pt-14" />
        <h2 className="uppercase text-razergreen font-semibold text-2xl text-center">
          Product Images
        </h2>
        <div id="carousel-image" className="grid grid-cols-4 gap-4 pt-12">
          <CarouselImage />
          <CarouselImage />
          <CarouselImage />
          <CarouselImage />
        </div>
        <div
          id="carousel-button"
          className="flex gap-2.5 mt-10 pb-10 justify-center"
        >
          <button className="h-2 w-2 bg-razergreen rounded-full ring-[1px] ring-razergreen ring-offset-2 ring-offset-black"></button>
          <button className="h-2 w-2 bg-gray-400 rounded-full"></button>
          <button className="h-2 w-2 bg-gray-400 rounded-full"></button>
        </div>
      </div>
      {/* <div className="h-1 w-full bg-white"></div> */}
    </div>
  );
};

export default Carousel;
