import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

interface ProductCardProps {
  image: any;
  name: any;
  rating: any;
  inStock: any;
  price:any;
  productid:any;
  btn:any;
}

const ProductCard = ({
  image,
  name,
  rating,
  inStock,
  price,
  productid,
  btn
}:ProductCardProps) => {
  
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <i key={i} className={"text-yellow-400 text-lg"}>
          <AiFillStar />
        </i>
      );
    }
    return stars;
  };

  return (
    <Link href={btn}>
    <div className="max-w-xs shadow-xl shadow-brown/40 bg-gradient-to-b from-orange-200/70 via-orange-100/70 to-brown/70 mx-auto rounded-lg text-brown overflow-hidden hover:translate-z-10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-brown font-roboto">
      <Image
        className="w-full"
        src={image}
        alt={name}
        width={300}
        height={270}
      />
      <div className="px-6 py-4">
        <h1 className="text-4xl tracking-wide font-bold mb-2 font-festive">
          {name}
        </h1>
        <div className="font-semibold text-lg mb-2">
          {price}
          <span>$</span>
        </div>
        <div className="flex items-center mb-2">{renderStars()}</div>
        {inStock ? (
          <span className="inline-block bg-green-500 text-white text-sm px-2 py-1 rounded-full">
            #instock
          </span>
        ) : (
          <span className="inline-block bg-red-500 text-white text-sm px-2 py-1 rounded-full">
            #Out of stock
          </span>
        )}
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
