"use client";
import { RiMenu3Line } from "react-icons/ri";
import {RxCross1} from "react-icons/rx"
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import SearchComponent from "./search";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="navbg">
      <nav>
        <div className="flex items-center pt-2 justify-between lg:mx-24 xl:mx-24 md:mx-4">
          <div className="text-4xl text-white font-serif font-bold">
            <Link href={"/"}><Image src="/logo.png" alt="logo" width={60} height={30}/></Link>
          </div>
          <div className="lg:block xl:block md:block hidden">
            <ul className="flex space-x-8 font-medium text-white font-serif">
              <li className="flex-grow ulanime tracking-widest">
                <Link href={"#"}>Home</Link>
              </li>
              <li className="flex-grow ulanime tracking-widest">
                <Link href={"/about"}>About us</Link>
              </li>
              <li className="flex-grow ulanime tracking-widest">
                <Link href={"#"}>Products</Link>
              </li>
              <li className="flex-grow ulanime tracking-widest">
                <Link href={"#"}>Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="lg:block xl:block md:block hidden">
            <ul className="flex space-x-8 font-medium text-white font-serif">
              <li className="flex-grow ulanime tracking-widest">
                <Link href={"#"}>Account</Link>
              </li>
              <li>
                <Link href="#" className={`text-lg`}>
                  <SearchComponent />
                </Link>
              </li>
              <li>
                <Link href="#" className={`text-lg`}>
                  <FaShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden xl:hidden md:hidden block cursor-pointer">
            {isOpen ? (
              <div onClick={handleMenuClick}>
                {/* Render RxCross1 */}
                <RxCross1 color="white" className="text-2xl" />
              </div>
            ) : (
              <div onClick={handleMenuClick}>
                {/* Render RiMenu3Line */}
                <RiMenu3Line color="white" className="text-2xl" />
              </div>
            )}
          </div>
        </div>
        <div className="block lg:hidden xl:hidden">
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:w-auto w-full`}
          >
            <nav>
              <ul className="flex-cols font-medium text-white font-serif mt-2">
                <li className="flex-grow ulanime tracking-widest">
                  <Link href={"#"}>Home</Link>
                </li>
                <li className="flex-grow ulanime tracking-widest">
                  <Link href={"/about"}>About us</Link>
                </li>
                <li className="flex-grow ulanime tracking-widest">
                  <Link href={"#"}>Products</Link>
                </li>
                <li className="flex-grow ulanime tracking-widest">
                  <Link href={"#"}>Contact us</Link>
                </li>
                <li className="flex-grow ulanime tracking-widest">
                  <Link href={"#"}>Account</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </main>
  );
}
