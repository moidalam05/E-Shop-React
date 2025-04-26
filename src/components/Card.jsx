import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ featuredProduct, handleLiked, liked, product }) => {
  const currentProduct = featuredProduct || product;

  if (!currentProduct) {
    return <div>Loading...</div>;
  }

  const {
    id,
    images,
    title,
    price,
    discountPercentage,
    rating,
    availabilityStatus,
  } = currentProduct;

  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      to={`/product/${id}`}
      onClick={handleCardClick}
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
          className="w-full h-56 object-contain object-center hover:scale-110 duration-200 ease-in"
        />
      </div>
      <div className="mt-2 px-4 py-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-4">
            <p className="text-black font-semibold text-xl">${price}</p>
            <p className="text-green-700 font-semibold">
              {Math.round(discountPercentage)}% off
            </p>
          </div>
          <p className="text-gray-600">Rating: {rating}</p>
        </div>
        <p
          className={`${
            availabilityStatus === "Low Stock"
              ? "text-red-600"
              : "text-green-600"
          } font-semibold mt-2`}
        >
          {availabilityStatus}
        </p>
      </div>
    </Link>
  );
};

export default Card;
