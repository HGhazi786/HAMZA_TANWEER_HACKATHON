"use client";
import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import getStipePromise from "../lib/stripe";
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/features/cartslice";
import { FaShoppingCart } from 'react-icons/fa';
import {BsTrash3} from 'react-icons/bs'
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import MyQuantity from "../components/quantity";
import toast  from 'react-hot-toast';
import { SignInButton,useUser} from '@clerk/nextjs';
import History from '../components/history';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';


interface ProductPayload {
  product_id: string;
  quantity: number;
}


export default function CartPage() {
  const [open, setOpen] = useState(false);
  const {isSignedIn,user} = useUser()
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalAmount);
  const totalquantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const dispatch=useDispatch()

  
const handleToggle = () => {
  if(open)
  {setOpen(false);}
  else
  {setOpen(true)}
};

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
  }
  
  const deleteApi=async (id:string)=>{
    try {
      const response = await fetch(`/api/cart/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  }
  async function handleDelete(id: string) {
    toast.promise(deleteApi(id), {
      loading: "Deleting Product",
      success: "Product Deleted Successfully",
      error: "Failed to Delete",
    });
    dispatch(cartActions.removeProduct(id));
    
  };

  if (cartItems.length > 0) {
  return (
    <div>
      <div className="flex flex-col lg:flex-row xl:flex-row items-center justify-between gap-x-[350px] mrgn">
        <div className="basis-3/4">
          <title>Cart</title>
          <h3 className="text-3xl font-roboto font-bold">Current Purchases</h3>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="bg-gradient-to-tl from-orange-200/70 via-orange-200/70 to-orange-900/70 shadow-lg shadow-brown/30 my-10 rounded-lg grid md:grid-cols-3 xl:grid-cols-3 grid-cols-1 lg:grid-cols-3 items-center"
            >
              <div className="flex justify-center">
                <Image
                  src={item.image}
                  width={200}
                  height={150}
                  alt={item.name}
                  className="rounded-l-lg mr-4 w-[300px] h-[180px]"
                />
              </div>
              <div className="flex flex-col space-y-1 mt-1 md:space-y-8 xl:space-y-8 lg:space-y-8 items-start">
                <p className="text-brown text-4xl tracking-wider font-bold text-center font-festive">
                  {item.name}
                </p>
                <MyQuantity id={item._id} quty={item.quantity} citem={item} />
              </div>
              <div className="flex flex-col space-y-1 mt-1 md:space-y-12 xl:space-y-12 lg:mr-5 xl:mr-5 md:mr-5 lg:space-y-12 items-end">
                <button onClick={() => handleDelete(item._id)}>
                  <BsTrash3 className="text-brown hover:text-orange-900 text-xl" />
                </button>
                <p className="text-center text-brown text-lg font-bold">
                  Total:{item.totalPrice} $
                </p>
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
                  {isSignedIn ? (
                    <button
                      className="bg-orange-50 py-2 px-3 rounded-md text-orange-950 font-sans hover:bg-orange-200"
                      onClick={handleCheckout}
                    >
                      Proceed to Check out
                    </button>
                  ) : (
                    <SignInButton mode="modal">
                      <button className="bg-orange-50 py-2 px-3 rounded-md text-orange-950 font-sans hover:bg-orange-200">
                        Proceed to Check out
                      </button>
                    </SignInButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-10 mrgn py-8">
        <h3 className="text-3xl font-roboto font-bold">Previous Purchases</h3>
        <button
          onClick={() => handleToggle()}
          className="text-xl font-bold text-brown"
        >
          {open ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </div>
      {open && <History />}
    </div>
  );
}
else {
    return (
      <main>
        <div className="flex flex-col w-full gap-10 h-full justify-center items-center py-10">
          <FiShoppingCart size={200} className="text-brown opacity-70" />
          <h1>Your shopping cart is empty</h1>
          <Link
            href="/products"
            className={`text-lg font-roboto tracking-wide font-thin bg-brown text-orange-50 px-4 py-2 rounded-lg hover:bg-orange-900`}
          >
            <FaShoppingCart className="inline-block mr-2" />
            <span>Start Shopping</span>
          </Link>
        </div>
        {isSignedIn && (
          <button className="flex justify-between mrgn my-8 p-4 w-full items-center border-2 rounded-lg border-brown">
            <h3 className="text-3xl font-roboto font-bold">
              Previous Purchases
            </h3>
            <button onClick={() => handleToggle()} className='text-xl font-bold text-brown'>
              {open ? <AiOutlineUp /> : <AiOutlineDown />}
            </button>
          </button>
        )}
        {open && isSignedIn && <History />}
      </main>
    );
  }
}