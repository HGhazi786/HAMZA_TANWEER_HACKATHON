"use client";
import Image from "next/image";
import {useState} from "react"
import {useSearchParams } from "next/navigation";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetailsPage = () => {
  const router = useSearchParams();
  const Nname = router.get("Nname");
  const Pprice = router.get("Pprice");
  const Rrating = router.get("Rrating");
  const Iimage = router.get("Iimage");
  const description = String(router.get("desc"));
  const name = String(Nname);
  const price = Number(Pprice);
  const rating = Number(Rrating);
  const image = String(Iimage);
  const [quantity, setQuantity] = useState(1);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <i key={i} className={"text-yellow-400 text-lg"}>
          <AiFillStar />
        </i>
      );
    }
    return stars;
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  // Here you can fetch the product details using the provided ID
  // and pass them to the ProductDetails component

  return (
    <div>
      <title>{name}</title>
      <div className="grid my-20 mrgn grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 gap-x-10 bg-brown text-orange-100 shadow-2xl shadow-brown">
        <Image
          src={image}
          alt={name}
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
        <div className="grid grid-cols gap-y-5 py-10 px-2">
          <h2 className="text-5xl font-semibold">{name}</h2>
          <p className="text-lg">{description}</p>
          <div className="flex mr-2 mt-5">{renderStars()}</div>
          <div>
            <div className="flex items-center space-x-2">
              <button
                onClick={decreaseQuantity}
                className="border border-orange-100 p-3 text-xl font-extrabold transition duration-200 hover:bg-orange-100"
              >
                <AiOutlineMinus />
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="border border-orange-100 p-3 text-xl font-extrabold transition duration-200 hover:bg-orange-50"
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="font-semibold text-xl mt-2">${price * quantity}</div>
          <button
            onClick={handleAddToCart}
            className={`text-lg bg-orange-100 px-4 py-2 rounded-lg hover:bg-orange-200 text-brown w-40 h-12`}
          >
            <FaShoppingCart className="inline-block mr-2" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
