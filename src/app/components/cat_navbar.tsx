"use client";
import { BiCake, BiDoughnutChart } from "react-icons/bi";
import { GiCupcake, GiSlicedBread,GiChocolateBar } from "react-icons/gi";
import React, { useState } from "react";

export default function Catbar() {
const [selectedCategory, setSelectedCategory] = useState("cakes");

  const handleCake = () => {
    setSelectedCategory("cake");
  };
  const handlecupcake = () => {
    setSelectedCategory("cupcake");
  };
  const handlebread = () => {
    setSelectedCategory("bread");
  };
  const handledoughnut = () => {
    setSelectedCategory("doughnut");
  };
  const handlebiscuit = () => {
    setSelectedCategory("biscuit");
  };
  return (
    <main className="bg-orange-200 text-brown text-3xl sticky top-20">
      <nav>
        <div className="flex items-center pt-2 justify-around lg:mx-24 xl:mx-24 md:mx-4 flex-wrap">
          <div className="lg:block xl:block md:block hidden">
            <ul className="flex lg:space-x-24 xl:space-x-36 space-x-6 md:space-x-16 font-medium font-serif">
              <li className="flex-grow ulanime tracking-widest">
                <button
                  className="bg-transperant hover:text-orange-900"
                  onClick={handleCake}
                >
                  <BiCake />
                </button>
              </li>
              <li className="tracking-widest">
                <button
                  className="bg-transperant hover:text-orange-900"
                  onClick={handlecupcake}
                >
                  <GiCupcake />
                </button>
              </li>
              <li className="flex-grow ulanime tracking-widest">
                <button
                  className="bg-transperant hover:text-orange-900"
                  onClick={handlebread}
                >
                  <GiSlicedBread />
                </button>
              </li>
              <li className="flex-grow ulanime tracking-widest">
                <button
                  className="bg-transperant hover:text-orange-900"
                  onClick={handlebiscuit}
                >
                  <GiChocolateBar />
                </button>
              </li>
              <li className="flex-grow ulanime tracking-widest">
                <button
                  className="bg-transperant hover:text-orange-900"
                  onClick={handledoughnut}
                >
                  <BiDoughnutChart />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}
