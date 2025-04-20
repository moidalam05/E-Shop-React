import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const categories = [
  {
    name: "Electronics",
    image: "https://img.freepik.com/free-photo/3d-workstation-with-computer-peripheral-devices_23-2150714175.jpg?t=st=1743162568~exp=1743166168~hmac=0d41105cfdffa5252e1e2b210914a707a3a9cdee1474d899d51b45434396482b&w=1380",
  },
  { name: "Fashion", image: "https://img.freepik.com/free-photo/3d-workstation-with-computer-peripheral-devices_23-2150714175.jpg?t=st=1743162568~exp=1743166168~hmac=0d41105cfdffa5252e1e2b210914a707a3a9cdee1474d899d51b45434396482b&w=1380" },
  {
    name: "Home & Kitchen",
    image: "https://img.freepik.com/free-photo/3d-workstation-with-computer-peripheral-devices_23-2150714175.jpg?t=st=1743162568~exp=1743166168~hmac=0d41105cfdffa5252e1e2b210914a707a3a9cdee1474d899d51b45434396482b&w=1380",
  },
  { name: "Sports", image: "https://img.freepik.com/free-photo/3d-workstation-with-computer-peripheral-devices_23-2150714175.jpg?t=st=1743162568~exp=1743166168~hmac=0d41105cfdffa5252e1e2b210914a707a3a9cdee1474d899d51b45434396482b&w=1380" },
];

const TrendingCategories = () => {
  return (
    <div className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Trending Categories</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-32 h-32 object-cover rounded-md"
            />
            <p className="mt-3 font-semibold">{category.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCategories;
