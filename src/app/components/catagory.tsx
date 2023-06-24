import React from 'react'

interface catagoryProp{
    title:string,
    description:any,
    img:string
}

export default function Catagory(props:catagoryProp) {
  return (
    
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black">
          <div className="h-72 w-60">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={props.img}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brown group-hover:from-brown/70 group-hover:via-brown/60 group-hover:to-brown/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white">
              {props.title}
            </h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {props.description}
            </p>
            <button className="rounded-full bg-brown py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button>
          </div>
        </div>
  );
}
