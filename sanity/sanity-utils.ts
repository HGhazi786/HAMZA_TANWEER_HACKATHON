import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Product_cards } from "../types/product";
import { Page } from "../types/page";

export async function getProducts():Promise<Product_cards[]> {
  const lib = await createClient(clientConfig).fetch(
    groq`*[_type == "product_cards"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
    }`
  );
  return lib; 
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`
  );
}