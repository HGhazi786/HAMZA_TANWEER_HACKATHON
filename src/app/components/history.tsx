import Image from 'next/image';
import React from 'react'
import { BsTrash3 } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { toast } from 'react-hot-toast';
import { cartActions } from '@/store/features/cartslice';
import { useDispatch } from 'react-redux';


export default async function History(props:any) {
const dispatch = useDispatch();

async function clickhandle(item:any) {
  toast.promise(apiPost(item), {
    loading: "Adding to Cart",
    success: "Product added successfully",
    error: "Failed to add to cart",
  });
  dispatch(
    cartActions.addToCart({
      product: item,
      quantity: item.quantity,
    })
  );
};

const apiPost = async (item:any) => {
  const res = await fetch("/api/cart", {
    method: "POST",
    body: JSON.stringify({
      product_id: item._id,
      quantity: item.quantity,
      product_name: item.name,
      price: item.price,
      total_price: item.price * item.quantity,
      image: item.image,
    }),
  });
};
  const res = props ?  await fetch( `/api/cart`, {
    method: "GET",
  }):null
  const product = await res?.json();

  const deleteApi = async (id: string) => {
    try {
      const response = await fetch(`/api/cart/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  async function handleDelete(id: string) {
    toast.promise(deleteApi(id), {
      loading: "Deleting Product",
      success: "Product Deleted Successfully",
      error: "Failed to Delete",
    });
  }

  return (
    <div className="mrgn">
      {product.map((item: any) => (
        <div
          key={item._id}
          className="bg-gradient-to-tl from-orange-200/70 via-orange-200/70 to-orange-900/70 shadow-lg shadow-brown/30 my-10 rounded-lg grid md:grid-cols-4 xl:grid-cols-4 grid-cols-1 lg:grid-cols-4 items-center justify-center md:w-[850px] lg:w-[850px] xl:w-[850px]"
        >
          <div className="flex justify-center items-center">
            <Image
              src={item.image}
              width={200}
              height={150}
              alt={item.name}
              className="rounded-l-lg mr-4 w-[300px] h-[180px]"
            />
          </div>
          <div className="flex flex-col space-y-1 mt-1 md:space-y-8 xl:space-y-8 lg:space-y-8 xl:items-start lg:items-start md:items-start items-center justify-center">
            <p className="text-brown text-4xl tracking-wider font-bold text-center font-festive">
              {item.name}
            </p>
            <p className="text-xl font-roboto font-bold">
              Quantity: {item.quantity}
            </p>
          </div>
          <div className="flex flex-col space-y-1 mt-1 md:space-y-3 xl:space-y-8 lg:space-y-8 xl:items-start lg:items-start md:items-start items-center justify-center">
            <p className="text-md font-roboto font-semibold">
              Time: {item.time}
            </p>
            <p className="text-md font-roboto font-semibold">
              Date: {item.date}
            </p>
            <p className="text-md font-roboto font-semibold">
              Order Status: {item.orderStatus}
            </p>
          </div>
          <div className="flex flex-col space-y-1 mt-1 md:space-y-12 xl:space-y-12 lg:mr-5 xl:mr-5 md:mr-5 lg:space-y-12 xl:items-end lg:items-end md:items-end items-center justify-center">
            <div className="space-x-5">
              <button
                className="text-brown hover:text-orange-900 text-xl"
                onClick={() => clickhandle(item)}
              >
                <BiAddToQueue />
              </button>
              <button onClick={() => handleDelete(item._id)}>
                <BsTrash3 className="text-brown hover:text-orange-900 text-xl" />
              </button>
            </div>
            <p className="text-center text-brown text-lg font-bold">
              Total:{item.price * item.quantity} $
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

