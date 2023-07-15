import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-orange-100 min-w-screen">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-3 h-3 bg-brown rounded-full"></div>
        <div className="w-3 h-3 bg-brown rounded-full"></div>
        <div className="w-3 h-3 bg-brown rounded-full"></div>
      </div>
    </div>
  );
}
