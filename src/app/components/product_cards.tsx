import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

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
    <div className="max-w-xs bg-orange-50 mx-auto rounded-lg overflow-hidden hover:translate-z-10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-brown font-serif">
      <Image
        className="w-full"
        src={image}
        alt={name}
        width={300}
        height={270}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
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
      <div className="px-6 py-4">
        <Link
          href={btn}
          className="bg-brown hover:bg-orange-900 text-orange-50 font-bold py-2 px-4 rounded-lg"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
