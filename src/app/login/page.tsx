"use client";
import { useState } from "react";

const SignUp = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex py-10 items-center justify-center bg-orange-100">
      <div className="max-w-md w-full p-6 bg-orange-50 rounded-md shadow-lg shadow-brown/50">
        <h2 className="text-3xl font-bold text-center text-brown">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          {!isSignIn && (
            <div>
              <label htmlFor="name" className="block text-brown">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-brown"
                required
              />
            </div>
          )}
          <div className="mt-4">
            <label htmlFor="email" className="block text-brown">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-brown"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-brown">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-brown"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-6 text-white bg-brown rounded-md hover:bg-orange-900"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <button
            className="ml-1 underline text-brown hover:text-orange-900 font-semibold"
            onClick={toggleForm}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
