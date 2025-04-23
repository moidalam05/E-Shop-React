import React from "react";
import { Link } from "react-router-dom";

const ShopCards = ({ shopProducts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {shopProducts.map((shopProduct) => (
        <Link
          to={`/product/${shopProduct.id}`}
          key={shopProduct.id}
          className="bg-white shadow-sm wfull md:w-[300px] hover:shadow-lg transition-all duration-200 ease-in rounded-lg p-4 "
        >
          <img
            src={shopProduct.images[0]}
            alt={shopProduct.title}
            className="w-full h-56 object-cover object-center rounded-t-lg"
          />
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {shopProduct.title}
            </h2>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-4">
                <p className="text-black font-semibold text-xl">
                  ${shopProduct.price}
                </p>
                <p className="text-green-700 font-semibold">
                  {Math.round(shopProduct.discountPercentage)}% off
                </p>
              </div>
              <p className="text-gray-600">Rating: {shopProduct.rating}</p>
            </div>
            <p
              className={`${
                shopProduct.availabilityStatus === "Low Stock"
                  ? "text-red-600"
                  : "text-green-600"
              } font-semibold mt-2 `}
            >
              {shopProduct.availabilityStatus}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShopCards;
