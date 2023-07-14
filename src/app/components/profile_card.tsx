import Image from "next/image";
import React from "react";

interface ProfileCardProps {
  picture: string;
  name: string;
  designation: string;
  description: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <div className="bg-orange-50 font-roboto shadow-2xl shadow-brown rounded-xl flex flex-col items-center">
      <Image
        src={props.picture}
        alt="Profile Picture"
        className="w-full h-60 mb-4"
        width={800}
        height={900}
      />
      <h2 className="text-3xl font-bold mb-2 font-great text-brown">{props.name}</h2>
      <p className="text-orange-800 mb-2">{props.designation}</p>
      <p className="text-brown p-4">{props.description}</p>
    </div>
  );
};

export default ProfileCard;
