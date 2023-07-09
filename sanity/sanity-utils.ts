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

export async function getcakes(): Promise<Product_cards[]> {
  const lib = await createClient(clientConfig).fetch(
    groq`*[_type == "product_cards"&&catagory=="cake"]{
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

export async function getbiscuits(): Promise<Product_cards[]> {
  const lib = await createClient(clientConfig).fetch(
    groq`*[_type == "product_cards"&&catagory=="biscuit"]{
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

export async function getbread(): Promise<Product_cards[]> {
  const lib = await createClient(clientConfig).fetch(
    groq`*[_type == "product_cards"&&catagory=="bread"]{
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

export async function getdoughnut(): Promise<Product_cards[]> {
  const lib = await createClient(clientConfig).fetch(
    groq`*[_type == "product_cards"&&catagory=="doughnut"]{
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

export async function getcupcakes(): Promise<Product_cards[]> {
  const lib = await createClient(clientConfig).fetch(
    groq`*[_type == "product_cards"&&catagory=="cupcake"]{
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