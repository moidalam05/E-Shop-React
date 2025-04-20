import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ featuredProduct, handleLiked, liked }) => {
  return (
    <>
      <Link
        key={featuredProduct.id}
        to={`/product/${featuredProduct.id}`}
        className="bg-white mx-4 md:mx-0 shadow-md rounded-lg overflow-hidden"
      >
        <div className="relative">
          <button
            onClick={(e) => handleLiked(e, featuredProduct.id)}
            className="absolute text-red-500 right-4 top-4 text-2xl cursor-pointer z-10
              "
          >
            {liked[featuredProduct.id] ? <FaHeart /> : <CiHeart />}
          </button>
          <img
            src={featuredProduct.images[0]}
            alt="Product 1"
            className="w-full h-auto object-cover rounded-lg hover:scale-110 duration-200 ease-in"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{featuredProduct.title}</h3>
          <p className="text-gray-600">${featuredProduct.price}</p>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer">
            Add to Cart
          </button>
        </div>
      </Link>
    </>
  );
};

export default Card;
