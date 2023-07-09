"use client";
import React, {useState} from 'react'
import ProductCard from '../components/product_cards'
import { getProducts } from "../../../sanity/sanity-utils";
import BackgroundSlider from '../components/slider';



export default async function Page() {
  const [selectedCategory, setSelectedCategory] = useState("ALL Products");
  const projects = await getProducts();
  
  const filteredProjects=projects
  if (selectedCategory===""){
  }
  else{
  const filteredProjects = projects.filter(
    (project) => project.catagory === selectedCategory
  );}
  
    const handleCake = () => {
      console.log("fired");
      setSelectedCategory("cake");
    };
    const handlecupcake = () => {
      console.log("fired")
      setSelectedCategory("cupcake");
    };
    const handlebread = () => {
      console.log("fired");
      setSelectedCategory("bread");
    };
    const handledoughnut = () => {
      console.log("fired");
      setSelectedCategory("doughnut");
    };
    const handlebiscuit = () => {
      console.log("fired");
      setSelectedCategory("biscuit");
    };

  return (
    <div className="bg-orange-100 font-serif">
      <title>{selectedCategory}</title>
      <div
        style={{ position: "relative", width: "100%", height: "350px" }}
        className="bg-brown"
      >
        <BackgroundSlider
          bg1="/hero.jpg"
          bg2="/hero1.jpg"
          bg3="/hero2.jpg"
          bg4="/hero.jpg"
        />
        <div
          style={{ position: "relative", zIndex: 1 }}
          className="lg:py-20 xl:py-32 md:py-16 px-4 flex flex-col space-y-2 lg:space-y-3 text-orange-100 xl:space-y-3 md:space-y-3 items-center justify-center"
        >
          <h1 className="font-extrabold lg:text-7xl xl:text-6xl md:text-7xl text-4xl text-center text-orange-50">
            Taste the Magic
          </h1>
          <p className="md:mx-44 lg:mx-72 xl:mx-96 mx-4 text-center text-lg text-orange-50">
            Journey through Our Mouthwatering Baked Offerings
          </p>
        </div>
      </div>

      <div className="bg-orange-200 text-brown text-3xl sticky top-12">
        <div>
          <div className="flex items-center pt-2 justify-around lg:mx-24 xl:mx-24 md:mx-4 flex-wrap">
            <div className="">
              <ul className="flex items-center lg:space-x-24 xl:space-x-36 space-x-6 md:space-x-16 font-serif bg-transperant text-lg font-bold focus:bg-transparent">
                <li className="hover:text-orange-900">
                  <button onClick={handleCake}>CAKES</button>
                </li>
                <li className="hover:text-orange-900">
                  <button onClick={handlecupcake}>CUP-CAKES</button>
                </li>
                <li className="hover:text-orange-900">
                  <button onClick={handlebread}>BREAD</button>
                </li>
                <li className="hover:text-orange-900">
                  <button onClick={handlebiscuit}>BISCUITS</button>
                </li>
                <li className="hover:text-orange-900">
                  <button
                    className="bg-transperant hover:text-orange-900"
                    onClick={handledoughnut}
                  >
                    DOUGHNUTS
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mrgn py-20 grid lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-5">
          {filteredProjects.map((project) => (
            <ProductCard
              key={project.name}
              name={project.name}
              image={project.image}
              rating={project.rating}
              inStock={project.avaliability}
              price={project.price}
              productid={project._id}
              btn={`/products/product-details?id=${project._id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
