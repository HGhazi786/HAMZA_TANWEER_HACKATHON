import React from "react";
import Link from "next/link";
import AnimatedTestimonials from "./testimonial_anim";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { WipeAnimation, TextAnimation } from "./animations";
import Catagory from "./catagory";
import S_cards from "./special_cards";
import BackgroundSlider from "./slider";

export default function Front_page() {
  return (
    <div className="bg-orange-100">
      <div className="grid md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 md:py-10 lg:py-10 xl:py-10 gap-y-4 xl:gap-x-10 md:gap-x-10 lg:gap-x-10 lg:mx-24 xl:mx-24 md:mx-16 mx-4">
        <div className="">
          <h1 className="text-4xl text-brown font-serif font-semibold tracking-normal lg:mt-36 xl:mt-36 md:mt-36 mt-6">
            <TextAnimation text="Our Products" />
          </h1>
          <p className="font-serif text-lg font-extralight mt-8 text-justify">
            Indulge in our bakery&apos;s irresistible treats, from fluffy bread
            and buttery croissants to luscious pies and velvety cakes. Crafted
            with passion and using the finest ingredients, each bite is a moment
            of pure bliss. Whether for everyday enjoyment or special occasions,
            our products exceed expectations, bringing joy and satisfaction to
            your palate. Experience the magic of our bakery, where quality and
            taste shine in every mouthwatering creation.
          </p>
          <div className="pt-8">
            <Link
              href="#"
              className={`text-lg bg-brown text-white px-4 py-2 rounded-lg shadow-2xl hover:bg-orange-900 shadow-brown`}
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
      <div className="bg-orange-100">
        <div className="py-10">
          <h1 className="font-serif font-semibold tracking-normal text-4xl text-brown lg:mx-24 md:mx-10 xl:mx-24 mx-4 text-center">
            Our Specialities
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-20 gap-y-2 lg:mx-24 xl:mx-24 md:mx-16 mx-4">
            <S_cards
              name="Black Forest Cake"
              price="$50"
              ratings={5}
              picture="/sp1.jpg"
              button="Buy Now"
            />
            <S_cards
              name="Croissants"
              price="$10"
              ratings={5}
              picture="/sp2.jpg"
              button="Buy Now"
            />
            <S_cards
              name="Molten Lava Cake"
              price="$25"
              ratings={5}
              picture="/sp3.jpg"
              button="Buy Now"
            />
            <S_cards
              name="Chocolate Hazelnut cupcake"
              price="$50"
              ratings={5}
              picture="/sp4.jpg"
              button="Buy Now"
            />
            <S_cards
              name="Nutella Filled cookies"
              price="$20"
              ratings={5}
              picture="/sp5.jpg"
              button="Buy Now"
            />
            <S_cards
              name="Black Forest Cake"
              price="$50"
              ratings={5}
              picture="/sp1.jpg"
              button="Buy Now"
            />
          </div>
        </div>
        <div className="mrgn grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-10">
          <div
            className="relative h-0 overflow-hidden rounded-xl shadow-2xl shadow-brown"
            style={{ paddingBottom: "56.25%" }}
          >
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/v1.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div>
            <h1 className="text-4xl text-brown font-serif font-semibold tracking-normal mt-6">
              <TextAnimation text="Our Services" />
            </h1>
            <p className="font-serif text-lg font-extralight mt-8 text-justify">
              We pride ourselves on providing an array of exceptional services
              that cater to all your baking needs. From custom cake designs that
              perfectly capture your vision to a wide selection of delectable
              pastries and baked goods, we offer creations that delight both the
              eyes and the taste buds. Our expert team is dedicated to ensuring
              personalized attention and outstanding customer service, whether
              it&apos;s assisting with special dietary requests, offering baking
              consultations, or providing timely delivery for your events. Your
              satisfaction is our top priority, and we strive to exceed your
              expectations with every service we provide.
            </p>
          </div>
        </div>
        <div className="py-10 lg:mx-24 md:mx-10 xl:mx-24 mx-4">
          <h1 className="font-serif font-semibold tracking-normal text-4xl text-brown text-center md:text-center lg:text-left xl:text-left">
            Testimonials
          </h1>
          <AnimatedTestimonials />
        </div>
      </div>
    </div>
  );
}
