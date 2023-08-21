"use client"
import Image from "next/image";
import { comment } from "postcss";
import React, { useState } from "react";
import toast from 'react-hot-toast'; // Import the useToasts hook

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Handle form submission logic here
    // You can use an API call or any other method to handle the data
    // For now, let's just show a success toast
    const response = await fetch("/api/feedback/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify({
        "name":name,
        "email":email,
        "comment":feedback
      }),
    });
    toast.success("Form submitted successfully we will get back to you asap!");
  };

  return (
    <div className=" max-w-[900px] mx-auto bg-brown shadow-xl shadow-brown/50 rounded-md my-10 text-orange-50 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
      <div className="hidden lg:block xl:block">
        <Image
          src={"/fbg.jpg"}
          alt="feedback image"
          width={435}
          height={480}
          className="absolute brightness-50"
        />
        <div className="w-[435px] h-full bg-gradient-to-tr from-brown/30 via-orange-900/30 to-orange-950/30 backdrop-blur-[2px]">
          <div className="p-10 z-50">
            <Image
              src={"/logo.png"}
              alt="feedback image"
              width={95}
              height={100}
              className="pt-5"
            />
            <h3 className="text-3xl pt-32 pb-4 font-bold">
              We&apos;re delighted
            </h3>
            <p className="text-orange-50">
              to hear your thoughts on our bakery delights! Your feedback helps
              us rise to the occasion and serve you better. Share your
              experience and let the flavors do the talking!
            </p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-semibold tracking-wider font-roboto mb-4">
          Leave Feedback
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-1 block w-full text-brown border-orange-900 shadow-sm focus:border-orange-900 focus:ring focus:ring-orange-800 focus:ring-opacity-50"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-1 block w-full text-brown border-orange-900 shadow-sm focus:border-orange-900 focus:ring focus:ring-orange-800 focus:ring-opacity-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block font-medium">
              Feedback
            </label>
            <textarea
              id="feedback"
              className="mt-1 p-1 block w-full text-brown border-orange-900 shadow-sm focus:border-orange-900 focus:ring focus:ring-orange-800 focus:ring-opacity-50"
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-orange-100 text-brown hover:bg-orange-200 focus:outline-none focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
