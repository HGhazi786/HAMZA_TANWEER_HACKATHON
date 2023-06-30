import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Product_cards } from "../types/product";

export async function getProducts():Promise<Product_cards[]> {
  const lib = await createClient(clientConfig).fetch(
    groq`*[_type == "product_cards"]{
    _id,
    _createdAt,
    name,
    price,
    catagory,
    rating,
    avaliability,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
    }`
  );
  return lib; 
}

