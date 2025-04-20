import React from "react";
import { Link } from "react-router-dom";

const Category = ({ categoryData }) => {
  return (
    <div className="relative overflow-hidden px-4 bg-gradient-to-r from-blue-400 to-indigo-500">
      <div className="flex animate-scroll hover:animate-none">
        <Link className="text-white whitespace-nowrap px-6 py-2" to="/category">
          All
        </Link>

        {categoryData.map((category) => (
          <Link
            className="text-white whitespace-nowrap px-6 py-2"
            key={category.slug}
            to={`/category/${category.slug}`}
          >
            {category.name}
          </Link>
        ))}

        {categoryData.map((category) => (
          <Link
            className="text-white whitespace-nowrap px-6 py-2"
            key={category.slug}
            to={`/category/${category.slug}`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            animation: scroll-left 20s linear infinite;
          }

          /* Pause the scroll on hover */
          .hover\\:animate-none:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default Category;
