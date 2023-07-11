"use client";
import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import getStipePromise from "../lib/stripe";
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/features/cartslice";
import { FaTrash } from 'react-icons/fa';

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalAmount);
  const dispatch=useDispatch()

  const handleCheckout = async () => {
    
    const stripe = await getStipePromise();
    const response = await fetch("/api/checkout/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(cartItems),
    });
    

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };
  
  return (
    <div className="p-2 space-y-5">
      <title>Cart</title>
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="mrgn bg-orange-50 grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 grid-cols-1 items-center py-2"
        >
          <div className="flex justify-center">
            <Image src={item.image} width={200} height={150} alt={item.name} />
          </div>
          <p className="text-brown text-xl font-bold text-center">
            {item.name}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 font-bold text-brown text-xl">
            <p>Price:{item.price} $</p>
          </div>
          <p className="text-center text-brown text-xl font-bold">
            Total:{item.price} $
          </p>
          <button
            onClick={() => {
              dispatch(cartActions.removeFromCart(item._id));
            }}
          >
            <FaTrash className="text-brown hover:text-orange-900 text-xl" />
          </button>
        </div>
      ))}
      <p className="text-brown text-2xl text-left mrgn">
        Total Price:{" "}
        <span className="text-orange-900 text-2xl font-bold">
          {totalPrice} $
        </span>
      </p>
      <div className="my-10 mrgn">
        <div className="py-5">
          <button
            className="bg-brown py-2 px-3 rounded-md text-orange-50 font-sans hover:bg-orange-900"
            onClick={handleCheckout}
          >
            Proceed to Check out
          </button>
        </div>
      </div>
    </div>
  );
};

