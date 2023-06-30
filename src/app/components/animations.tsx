"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const WipeAnimation = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "%",
        overflow: "hidden",
      }}
      className="p-4 md:p-9 xl:p-9 lg:p-9"
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundColor: "orange-100",
        }}
      >
        <div className="grid grid-rows-2 gap-4">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link href={"/"}>
              <Image
                src="/banner.jpg"
                alt="logo"
                width={1075}
                height={365}
                className="rounded-xl shadow-lg shadow-brown"
              />
            </Link>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link href={"/"}>
              <Image
                src="/banner2.jpg"
                alt="logo"
                width={1075}
                height={365}
                className="rounded-xl shadow-lg shadow-brown"
              />
            </Link>
          </div>
        </div>
      </div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#FFEDD5",
          opacity: 1.0,
        }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
};

interface WelcomeProps {
  text: string;
}

export const TextAnimation = (props:WelcomeProps) => {
  
  return (
    <motion.div className="text">
      {props.text.split("").map((letter:any, index:number) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

