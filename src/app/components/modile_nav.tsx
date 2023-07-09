"use client";
import { RiMenu3Line } from "react-icons/ri";
import {RxCross1} from "react-icons/rx"
import {MdAccountCircle} from "react-icons/md"
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import SearchComponent from "./search";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Navbar() {
   const cartValue = useSelector(
     (state: RootState) => state.cart.totalQuantity
   );
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="navbg">
      <nav>
        <div className="flex items-center justify-between mrgn">
          <div className="font-serif font-bold flex space-x-3">
            <Link href={"/"}>
              <Image src="/logo.png" alt="logo" width={40} height={20} />
            </Link>
          </div>
          <div className="lg:block xl:block md:block hidden">
            <ul className="flex space-x-8 font-medium text-white font-serif">
              <li className="flex-grow ulanime tracking-widest">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="flex-grow ulanime tracking-widest">
                <Link href={"/about"}>About us</Link>
              </li>
              <li className="flex-grow ulanime tracking-widest">
                <Link href={"/products"}>Products</Link>
              </li>
              <li className="flex-grow ulanime tracking-widest">
                <Link href={"/contact"}>Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="lg:block xl:block md:block hidden">
            <ul className="flex space-x-8 font-medium text-white font-serif justify-center items-center">
              <li className="flex-grow tracking-widest hover:text-orange-200">
                <Link href={"/SignIn"} className="text-2xl">
                  <MdAccountCircle />
                </Link>
              </li>
              <li>
                <Link href="#" className={`text-lg`}>
                  <SearchComponent />
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className={`h-8 w-8 rounded-full flex justify-center items-center relative`}
                >
                  <span className="flex absolute right-1 top-0 rounded-full bg-red-500 h-3 w-3 justify-center items-center text-white text-xs text-center">
                    {cartValue}
                  </span>
                  <FaShoppingCart className="text-lg"/>
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
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="flex-grow ulanime tracking-widest">
                  <Link href={"/about"}>About us</Link>
                </li>
                <li className="flex-grow ulanime tracking-widest">
                  <Link href={"/products"}>Products</Link>
                </li>
                <li className="flex-grow ulanime tracking-widest">
                  <Link href={"/contact"}>Contact us</Link>
                </li>
                <li className="flex-grow ulanime tracking-widest">
                  <Link href={"/login"}>Account</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </main>
  );
}
