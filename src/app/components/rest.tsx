import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart } from "react-icons/fa";
import { WipeAnimation, TextAnimation } from "./animations";
import Catagory from './catagory';

export default function Front_page() {
  return (
    <div className="bg-orange-100">
      <div className="grid md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 md:py-10 lg:py-10 xl:py-10 gap-y-4 xl:gap-x-10 md:gap-x-10 lg:gap-x-10 lg:mx-24 xl:mx-24 md:mx-4 mx-4">
        <div className="">
          <h1 className="text-4xl text-brown font-serif font-semibold tracking-normal lg:mt-36 xl:mt-36 md:mt-36 mt-6">
            <TextAnimation text="Our Products" />
          </h1>
          <p className="font-serif text-lg font-extralight mt-8 text-justify">
            Indulge in our bakery's irresistible treats, from fluffy bread and
            buttery croissants to luscious pies and velvety cakes. Crafted with
            passion and using the finest ingredients, each bite is a moment of
            pure bliss. Whether for everyday enjoyment or special occasions, our
            products exceed expectations, bringing joy and satisfaction to your
            palate. Experience the magic of our bakery, where quality and taste
            shine in every mouthwatering creation.
          </p>
          <div className="pt-8">
            <Link
              href="#"
              className={`text-lg bg-brown text-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-900`}
            >
              <FaShoppingCart className="inline-block mr-2" />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
        <div>
          <WipeAnimation />
        </div>
      </div>
      <div className="flex py-16 items-center justify-center bg-brown mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-8">
          <Catagory
            title="Cake"
            description="Heavenly perfection, our cakes are pure indulgence"
            img="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"
          />
          <Catagory
            title="Cup Cake"
            description="Delightful mini treats, our cupcakes are pure bliss"
            img="https://images.unsplash.com/photo-1564747519847-6414d97fc3b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          />
          <Catagory
            title="Bread"
            description="Wholesome artisan bread, baked to perfection"
            img="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          />
          <Catagory
            title="Biscuits"
            description="Buttery perfection in every bite, that melt in your mouth"
            img="https://images.unsplash.com/photo-1528591922185-a0eb2f8f50b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
          />
          <Catagory
            title="Doughnuts"
            description="Irresistibly fried bliss, our doughnuts are pure delight"
            img="https://images.unsplash.com/photo-1527904324834-3bda86da6771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1104&q=80"
          />
        </div>
      </div>
    </div>
  );
}
