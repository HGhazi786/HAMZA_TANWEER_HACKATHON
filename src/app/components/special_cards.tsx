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
    <div className="my-5 p-4 text-brown font-roboto border-r-2 border-r-brown shadow-2xl shadow-brown/30 border border-b-2 border-transparent border-b-brown">
      <div className="flex items-center flex-wrap">
        <Image
          src={props.picture}
          alt="Product Picture"
          width={200}
          height={200}
          className="rounded-xl mr-8"
        />
        <div className={props.button}>
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
