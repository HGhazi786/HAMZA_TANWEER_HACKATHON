import React, { useState } from "react";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { name } = router.query;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Add logic to handle adding the product to the cart
    console.log(
      `Added product ${name} to the cart with quantity ${quantity}`
    );
  };

  return (
    <div>
      <h1>Product Details - {name}</h1>
      <p>Product description goes here.</p>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <div className="flex items-center mt-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
