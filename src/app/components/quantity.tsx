import toast from "react-hot-toast";
import React, { useState } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { cartActions } from "@/store/features/cartslice";
import { useDispatch } from "react-redux";

interface mprod_data {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
}

interface qtyy
{
    id:string
    quty:number
    citem:mprod_data
}

export default function MyQuantity(props:qtyy) {
const [quantity, setQuty] = useState(props.quty);
const dispatch=useDispatch()


const apiCall = async (mid: string, q: number) => {
  try {
      const res = await fetch("/api/cart", {
        method: "PUT",
        body: JSON.stringify({ product_id: mid, quantity: q }),
      });
      return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

async function adder(mid:string) {
        toast.promise(apiCall(mid,quantity+1), {
            loading: "Increasing Quantity",
            success: "Product quantity Increased",
            error: "Failed to Decrease quantity",
      })
      setQuty(quantity+1);
      dispatch(
        cartActions.addToCart({
          product: props.citem,
          quantity:1,
        })
      );
    }

async function sub(mid: string) {
    if(quantity>1){
        toast.promise(apiCall(mid,quantity-1), {
            loading: "Decreasing Quantity",
            success: "Product quantity Decreased",
            error: "Failed to Decrease quantity",
      })
      setQuty(quantity - 1);
dispatch(
        cartActions.removeFromCart(mid)
      );
    }    
}

    return (
    <div className="flex justify-center items-center">
      <p className="text-xl font-bold font-roboto">Quantity:</p>
        <button
        onClick={() => {adder(props.id)}}
        className="rounded-full px-2 text-4xl text-brown"
        >
        <AiOutlinePlusCircle />
        </button>
        <p className="text-center text-brown text-lg">{quantity}</p>
        <button
        onClick={() => {sub(props.id)}}
        className="rounded-full text-brown px-2 text-4xl"
        >
        <AiOutlineMinusCircle />
    </button>
    </div>
    );
}
