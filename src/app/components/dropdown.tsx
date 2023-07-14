"use client";
import Link from "next/link";
import React, { useState,useRef,useEffect } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = () => {
    setIsOpen(false);
    // Add your code here for handling the selected option
  };


  return (
    <div className="relative">
      <button
        className="text-orange-50 focus:outline-none"
        onClick={toggleMenu}
      >
        Menu
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 py-2 w-48 bg-orange-50 rounded-md shadow-lg font-roboto">
          <Link
            href="/products/cake"
            className="block px-4 py-2 text-brown hover:bg-orange-200"
            onClick={handleOptionSelect}
          >
            Cakes
          </Link>
          <Link
            href="/products/cupcake"
            className="block px-4 py-2 text-brown hover:bg-orange-200"
            onClick={handleOptionSelect}
          >
            Cup Cakes
          </Link>
          <Link
            href="/products/doughnut"
            className="block px-4 py-2 text-brown hover:bg-orange-200"
            onClick={handleOptionSelect}
          >
            Doughnuts
          </Link>
          <Link
            href="/products/bread"
            className="block px-4 py-2 text-brown hover:bg-orange-200"
            onClick={handleOptionSelect}
          >
            Bread
          </Link>
          <Link
            href="/products/biscuit"
            className="block px-4 py-2 text-brown hover:bg-orange-200"
            onClick={handleOptionSelect}
          >
            Biscuit
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
