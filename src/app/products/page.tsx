import React from 'react'
import ProductCard from '../components/product_cards'
import { getProducts } from "../../../sanity/sanity-utils";
import Catbar from "../components/cat_navbar";
import BackgroundSlider from '../components/slider';


export default async function Page() {
  const projects = await getProducts();
  return (
    <div className="bg-orange-100 font-serif">
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
      <Catbar/>
      <div>
        <div className="mrgn py-20 grid lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-5">
          {projects.map((project) => (
            <ProductCard
              key={project.name}
              name={project.name}
              image={project.image}
              rating={project.rating}
              inStock={project.avaliability}
              price={project.price}
              productid={project._id}
              btn={`/products/product-details?Nname=${project.name}&Pprice=${project.price}&Rrating=${project.rating}&Iimage=${project.image}&desc=${project.content}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
