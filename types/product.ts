import { PortableTextBlock } from "sanity";

export type Product_cards = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
