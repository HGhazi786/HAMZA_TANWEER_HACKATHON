"use client";
import Link from "next/link";
import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          >
            Cakes
          </Link>
          <Link
            href="/products/cupcake"
            className="block px-4 py-2 text-brown hover:bg-orange-200"
          >
            Cup Cakes
          </Link>
          <Link
            href="/products/doughnut"
            className="block px-4 py-2 text-brown hover:bg-orange-200"
          >
            Doughnuts
          </Link>
          <Link
            href="/products/bread"
            className="block px-4 py-2 text-brown hover:bg-orange-200"
          >
            Bread
          </Link>
          <Link
            href="/products/biscuit"
            className="block px-4 py-2 text-brown hover:bg-orange-200"
          >
            Biscuit
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
