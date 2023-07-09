export type Product_cards = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  price:number;
  catagory:string;
  rating:number;
  avaliability:boolean;
  content: string;
};
export interface prod_data {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface CartItem {
  product: prod_data;
}
