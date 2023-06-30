"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface img {
  bg1: string;
  bg2: string;
  bg3: string;
  bg4: string;
}

const BackgroundSlider = (props:img) => {
  
  const backgroundImages = [props.bg1,props.bg2,props.bg3,props.bg4]

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the interval time as desired (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url(${backgroundImages[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        filter:"brightness(0.6) contrast(0.9) sepia(0.2) saturate(1.2) opacity(0.9)",
      }}
    />
  );
};
export default BackgroundSlider;