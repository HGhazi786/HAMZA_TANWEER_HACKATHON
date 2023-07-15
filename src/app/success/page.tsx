import React from 'react'

export default function Page() {
  return (
    <div>
      <div className="py-10 flex flex-col justify-center items-center w-full mt-20 gap-5">
        <p className="text-brown font-bold text-9xl leading-[200px] w-52 h-52 text-center rounded-full bg-orange-200">
          ✓
        </p>
        <h1>Success</h1>
        <p className="text-center text-2xl font-roboto">
          We received your purchase request,
          <br /> we&apos;ll be in touch shortly!
        </p>
      </div>
    </div>
  );
}
