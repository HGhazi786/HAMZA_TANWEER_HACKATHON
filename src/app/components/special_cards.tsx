import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import React from "react";
import Link from "next/link";

interface s_props {
  name: string;
  price: string;
  ratings: number;
  picture: string;
  button: string;
}

export default function S_cards(props: s_props) {
  // Function to render star icons based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= props.ratings; i++) {
      stars.push(
        <i key={i} className={"text-yellow-500 text-lg"}>
          <AiFillStar />
        </i>
      );
    }
    return stars;
  };
  return (
    <div className="my-5 text-brown font-roboto rounded-lg shadow-lg bg-gradient-to-tl from-orange-100/20 via-orange-200/20 to-orange-300/20 backdrop-blur-md">
      {/* 
      microsoft edge video like affect
      <Image
        src={props.picture}
        alt="Product Picture"
        fill
        className="rounded-lg -z-10 mr-8"
      /> */}
      <div className=" flex items-center flex-wrap rounded-lg bg-gradient-to-tr from-orange-200/70 via-orange-100/70 to-brown/70 backdrop-blur-2xl">
        <Image
          src={props.picture}
          alt="Product Picture"
          width={200}
          height={200}
          className="rounded-l-lg mr-8 lg:w-[260px] lg:h-[185px] xl:w-[260px] xl:h-[185px] md:w-[400px] md:h-[300px] w-[414px] h-[300px]"
        />
        <div className={`${props.button} py-5`}>
          <h2 className="text-4xl font-semibold b-4 font-festive">
            {props.name}
          </h2>
          <h2 className="text-lg font-normal mb-4">{props.price}</h2>
          <Link
            href={props.button}
            className="bg-brown hover:bg-orange-900 mb-4 text-orange-50 px-4 py-2 rounded-xl"
          >
            Buy Now
          </Link>
          <div className="">
            <div className="flex mr-2 mt-5">{renderStars()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
