import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import BackgroundSlider from "./slider";

export default function Hero() {
  return (
    <div
      style={{ position: "relative", width: "100%", height: "500px" }}
      className="bg-brown"
    >
      <BackgroundSlider
        bg1="/hero.jpg"
        bg2="/hero1.jpg"
        bg3="/hero2.jpg"
        bg4="/hero.jpg"
      />
      <div
        style={{ position: "relative", zIndex: 1 }}
        className="lg:py-28 font-roboto xl:py-40 text-orange-100 md:py-24 px-4 flex flex-col space-y-2 lg:space-y-3 xl:space-y-3 md:space-y-3 items-center justify-center"
      >
        <p className="text-white text-lg pt-28 lg:pt-1 xl:pt-1 md:pt-1 font-roboto text-center">
          Unveiling Delights Beyond Imagination
        </p>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="lg:w-64 xl:w-64 w-32 h-px bg-white border-0" />
          <span className="text-xl font-extrabold text-white px-3">
            <AiFillStar />
          </span>
          <hr className="lg:w-64 xl:w-64 w-32 h-px bg-white border-0" />
        </div>
        <h1 className="font-extrabold font-serif lg:text-7xl xl:text-7xl md:text-7xl text-4xl text-center text-white">
          The Oven&apos;s Secret Bakery
        </h1>
        <p className="text-white pt-10 text-center">
          Taste the artistry, bite by delectable bite.
        </p>
      </div>
    </div>
  );
}
