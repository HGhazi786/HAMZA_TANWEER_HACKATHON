import React from 'react'
import BackgroundSlider from '../components/slider';

export default function Page() {
  return (
    <div>
      <div
        style={{ position: "relative", width: "100%", height: "350px" }}
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
          className="lg:py-20 xl:py-32 md:py-16 px-4 flex flex-col space-y-2 lg:space-y-3 text-orange-100 xl:space-y-3 md:space-y-3 items-center justify-center"
        >
          <h1 className="font-extrabold lg:text-7xl xl:text-6xl md:text-7xl text-4xl text-center text-orange-50">
            Get Your Dream Creation
          </h1>
          <p className="md:mx-44 lg:mx-72 xl:mx-96 mx-4 text-center text-lg text-orange-50">
            Contact Us for a Custom Quote on Your Bespoke Baked Delight
          </p>
        </div>
      </div>
    </div>
  );
}
