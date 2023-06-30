import React from "react";

interface ProfileCardProps {
  picture: string;
  name: string;
  designation: string;
  description: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <div className="bg-orange-50  shadow-2xl shadow-brown rounded-xl flex flex-col items-center">
      <img
        src={props.picture}
        alt="Profile Picture"
        className="w-full h-60 mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{props.name}</h2>
      <p className="text-gray-600 mb-2">{props.designation}</p>
      <p className="text-gray-800 p-4">{props.description}</p>
    </div>
  );
};

export default ProfileCard;
