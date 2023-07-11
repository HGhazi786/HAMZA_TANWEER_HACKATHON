import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

interface Cardsprops {
  name: string;
  picture: string;
  event: string;
  comment: string;
  rating: number;
}

const TestimonialCard = ({
  name,
  picture,
  event,
  comment,
  rating,
}: Cardsprops) => {
  // Function to render star icons based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <i key={i} className={"text-yellow-500 text-lg"}>
          <AiFillStar />
        </i>
      );
    }
    return stars;
  };

  return (
    <div className="bg-orange-50 h-full shadow-lg shadow-brown/30 font-great my-5 rounded-xl p-4 flex flex-col justify-between text-brown">
      <div className="flex items-center mb-4">
        <Image
          src={picture}
          alt="Profile Picture"
          width={90}
          height={90}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-3xl font-extrabold">{name}</h2>
          <p className="text-orange-800 text-xl">{event}</p>
        </div>
      </div>
      <p className="text-orange-900 mb-4 text-lg font-light tracking-tight font-roboto">{comment}</p>
      <div className="flex items-center">
        <div className="flex mr-2">{renderStars()}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
