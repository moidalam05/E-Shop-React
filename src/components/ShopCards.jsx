import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShopCards = ({ Products = [] }) => {
  const [liked, setLiked] = useState({});
  const handleLiked = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Products.map((Products) => (
        <Link
          to={`/product/${Products.id}`}
          key={Products.title}
          className="bg-white shadow-sm wfull md:w-[300px] hover:shadow-lg transition-all duration-200 ease-in rounded-lg p-4 "
        >
          <div className="relative">
            <button
              onClick={(e) => handleLiked(e, Products.id)}
              className="absolute text-red-500 right-0 top-0 text-2xl cursor-pointer z-10"
            >
              {liked[Products.id] ? <FaHeart /> : <CiHeart />}
            </button>
            <img
              src={Products.images[0]}
              alt={Products.title}
              className="w-full h-56 object-contain object-center rounded-t-lg hover:scale-110 duration-200 ease-in"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {Products.title}
            </h2>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-4">
                <p className="text-black font-semibold text-xl">
                  ${Products.price}
                </p>
                <p className="text-green-700 font-semibold">
                  {Math.round(Products.discountPercentage)}% off
                </p>
              </div>
              <p className="text-gray-600">Rating: {Products.rating}</p>
            </div>
            <p
              className={`${
                Products.availabilityStatus === "Low Stock"
                  ? "text-red-600"
                  : "text-green-600"
              } font-semibold mt-2 `}
            >
              {Products.availabilityStatus}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShopCards;
