import React from 'react'
import { FaThumbsUp } from 'react-icons/fa';

export default function Page() {
  return (
    <div>
      <div className="py-10 flex flex-col justify-center items-center w-full mt-20 gap-5">
        <h1 className='text-brown text-6xl font-bold'>Ordered Successfully</h1>
        <p className="text-center text-2xl font-roboto">
          We received your purchase request,
          <br /> we&apos;ll be in touch shortly!
        </p>
      </div>
    </div>
  );
}
