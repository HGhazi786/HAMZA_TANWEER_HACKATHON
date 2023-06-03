import Navbar from "./components/modile_nav";
import { getProducts } from "../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const projects = await getProducts();
  console.log(projects)
  return (
    <>
      <Navbar />
      <div>
        {projects.map((project) => (
          <div key={project._id} className="text-white">
            <PortableText value={project.content} />
          </div>
        ))}
      </div>
    </>
  );
}
