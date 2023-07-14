"use client";
import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import getStipePromise from "../lib/stripe";
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/features/cartslice";
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalAmount);
  const totalquantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
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
  if (cartItems.length > 0) {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row items-center justify-between gap-x-28 mrgn">
      <div className="basis-3/4">
        <title>Cart</title>
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="bg-orange-50 my-10 gap-y-3 rounded-lg grid md:grid-cols-4 xl:grid-cols-4 grid-cols-1 lg:grid-cols-4 items-center py-2"
          >
            <div className="flex justify-center">
              <Image
                src={item.image}
                width={200}
                height={150}
                alt={item.name}
              />
            </div>
            <p className="text-brown text-4xl tracking-wider font-bold text-center font-festive">
              {item.name}
            </p>
            <div className="flex flex-col space-y-1 mt-1 md:space-y-3 xl:space-y-3 lg:space-y-3">
              <p className="text-center text-brown text-lg">
                Price: {item.price} $
              </p>
              <p className="text-center text-brown text-lg">
                Quantity: {item.quantity}
              </p>
            </div>
            <div className="flex flex-col space-y-1 mt-1 md:space-y-3 xl:space-y-3 lg:space-y-3 items-center justify-center">
              <p className="text-center text-brown text-lg font-bold">
                Total:{item.totalPrice} $
              </p>
              <button
                onClick={() => {
                  dispatch(cartActions.removeProduct(item._id));
                }}
              >
                <FaTrash className="text-brown hover:text-orange-900 text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="basis-1/4 my-10">
        <div className="bg-brown p-4 rounded-xl text-orange-50">
          <div className="flex flex-col items-center justify-between gap-5">
            <h4>Order Summary</h4>
            <div className="flex justify-between items-center w-full">
              <div>
                <p>Quantity</p>
              </div>
              <div>
                <p>{totalquantity}</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
                <p>Total Amount</p>
              </div>
              <div>
                <p>${totalPrice}</p>
              </div>
            </div>
            <div>
              <div className="py-5">
                <button
                  className="bg-orange-50 py-2 px-3 rounded-md text-orange-950 font-sans hover:bg-orange-200"
                  onClick={handleCheckout}
                >
                  Proceed to Check out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
else {
    return (
      <main>
        <div className="flex flex-col w-full gap-10 h-full justify-center items-center py-10">
          <FiShoppingCart size={200} className='text-brown opacity-70'/>
          <h1>Your shopping cart is empty</h1>
          <Link
            href="/products"
            className={`text-lg font-roboto tracking-wide font-thin bg-brown text-orange-50 px-4 py-2 rounded-lg hover:bg-orange-900`}
          >
            <FaShoppingCart className="inline-block mr-2" />
            <span>Start Shopping</span>
          </Link>
        </div>
      </main>
    );
  }
}