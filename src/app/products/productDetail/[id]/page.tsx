"use client";
import Image from "next/image";
import { AiFillStar} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { getProducts } from "../../../../../sanity/sanity-utils";
import { cartActions } from "@/store/features/cartslice";

interface prod_data {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice:number;
}

interface Props {
  product: prod_data;
}

const AddToCartBtn = (props: Props) => {
  const dispatch = useDispatch();
  const product_data: prod_data = {
    _id: props.product._id,
    name: props.product.name,
    image: props.product.image,
    price: props.product.price,
    quantity: props.product.quantity,
    totalPrice: props.product.price * props.product.quantity,
  };
  const clickhandle= async()=>{
    dispatch(cartActions.addToCart({ product: product_data, quantity: product_data.quantity }));
    // const res = await fetch("/api/cart", {
    //   method: "POST",
    //   body: JSON.stringify({ product_id: product_data._id, quantity :product_data.quantity}),
    // });
    toast.success("Product added");
  }
return (
        <button
            onClick={clickhandle}
            className={`text-lg bg-orange-100 px-4 py-2 rounded-lg hover:bg-orange-200 text-brown w-60 h-12`}
          >
            <FaShoppingCart className="inline-block mr-2" />
            <span>Add to Cart</span>
          </button>
    );
};



const ProductDetailsPage = async (
  { params }: { params: { id: string } },
  props: Props
) => {
  const [qty, setQuantity] = useState(1);
  const id = params.id;
  const projects = await getProducts();
  const filteredProjects = projects.filter((project) => project._id === id);
  const project = filteredProjects[0];
  const description = project.content;
  const name = project.name;
  const price = project.price;
  const rating = project.rating;
  const image = project.image;
  const inStock = project.avaliability;

  const product: prod_data = {
    _id: String(id),
    name: name,
    image: image,
    price: price,
    quantity: qty,
    totalPrice: price * qty,
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <i key={i} className={"text-yellow-400 text-lg"}>
          <AiFillStar />
        </i>
      );
    }
    return stars;
  };

  return (
    <div>
      <title>{name}</title>
      <div className="grid my-20 mrgn grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 gap-x-10 bg-brown text-orange-100 shadow-2xl shadow-brown">
        <Image
          src={image}
          alt={name}
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
        <div className="space-y-5 py-10 px-2 font-roboto">
          <h1 className="text-5xl font-semibold font-festive">{name}</h1>
          <p className="text-lg">{description}</p>
          <div className="flex mr-2 mt-5">{renderStars()}</div>
          <div></div>
          {inStock ? (
            <span className="inline-block bg-green-500 text-white text-sm px-2 py-1 rounded-full">
              #instock
            </span>
          ) : (
            <span className="inline-block bg-red-500 text-white text-sm px-2 py-1 rounded-full">
              #Out of stock
            </span>
          )}
          <div className="font-semibold text-xl mt-2">$ {price}</div>
          <AddToCartBtn product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
