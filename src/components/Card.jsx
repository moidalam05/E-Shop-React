import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ featuredProduct, handleLiked, liked, product, addToCart }) => {
  const currentProduct = featuredProduct || product;

  if (!currentProduct) {
    return <div>Loading...</div>;
  }

  const { id, images, title, price } = currentProduct;

  return (
    <Link
      to={`/product/${id}`}
      className="bg-white mx-4 md:mx-0 shadow-md rounded-lg overflow-hidden"
    >
      <div className="relative">
        <button
          onClick={(e) => handleLiked(e, id)}
          className="absolute text-red-500 right-4 top-4 text-2xl cursor-pointer z-10"
        >
          {liked[id] ? <FaHeart /> : <CiHeart />}
        </button>
        <img
          src={images[0]}
          alt={title}
          className="w-full h-auto object-cover rounded-lg hover:scale-110 duration-200 ease-in"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">${price}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(currentProduct);
          }}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default Card;
