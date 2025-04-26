import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // ⭐ Import star icons
import { Link } from "react-router-dom";

const ShopCards = ({ Products = [], products = [] }) => {
  const [liked, setLiked] = useState({});

  const handleLiked = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const itemsToShow = Products.length > 0 ? Products : products;

  // ⭐ Render Stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {itemsToShow.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.title}
          className="bg-white shadow-sm w-full md:w-[300px] hover:shadow-lg transition-all duration-200 ease-in rounded-lg p-4"
        >
          <div className="relative">
            <button
              onClick={(e) => handleLiked(e, product.id)}
              className="absolute text-red-500 right-0 top-0 text-2xl cursor-pointer z-10"
            >
              {liked[product.id] ? <FaHeart /> : <CiHeart />}
            </button>
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-56 object-contain object-center rounded-t-lg hover:scale-110 duration-200 ease-in"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {product.title}
            </h2>

            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-4">
                <p className="text-black font-semibold text-xl">
                  ${product.price}
                </p>
                <p className="text-green-700 font-semibold">
                  {Math.round(product.discountPercentage)}% off
                </p>
              </div>

              {/* ⭐ Show stars instead of number rating */}
              <div className="flex">{renderStars(product.rating)}</div>
            </div>

            <p
              className={`${
                product.availabilityStatus === "Low Stock"
                  ? "text-red-600"
                  : "text-green-600"
              } font-semibold mt-2`}
            >
              {product.availabilityStatus || "In Stock"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShopCards;
