import Navbar from "./components/modile_nav";
import { getProducts } from "../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Product_cards from "./components/product_cards";
import Hero from "./components/hero";
import Front_page from "./components/rest";
import Footers from "./components/footers";

export default async function Home() {
  //const projects = await getProducts();
  //console.log(projects)
  return (
    <>
      <Hero />
      <Front_page/>
      <div className="mx-24 grid grid-cols-4">
        <Product_cards />
      </div>
      {/* <div>
        {projects.map((project) => (
          <div key={project._id} className="text-white">
            <PortableText value={project.content} />
          </div>
        ))}
      </div> */}
    </>
  );
}
