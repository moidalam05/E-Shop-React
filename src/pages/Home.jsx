import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonial from "../components/Testimonial";
import homeImage from "../Assets/Images/home.jpg";
import TrendingCategories from "../components/TrendingCategories";
import CountdownTimer from "../components/CountdownTimer";
import BrandsWeWorkWith from "../components/BrandsWeWorkWith";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section with Glassmorphism */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeImage})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/10 border border-white/20">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-indigo-400 to-indigo-300 text-transparent bg-clip-text ">
              Welcome to Our Store
            </h1>
            <p className="text-lg md:text-2xl mb-6 text-gray-400">
              Discover the best products at unbeatable prices
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Shop Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Trending Categories Section */}
      <TrendingCategories />

      {/* Countdown Timer Section */}
      <CountdownTimer />

      {/* Achievements Section */}
      <motion.div
        className="py-16 bg-gray-200"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Happy Customers", value: 5000 },
              { label: "Products Sold", value: 12000 },
              { label: "Awards Won", value: 15 },
              { label: "Years in Business", value: 10 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <h3 className="text-5xl font-bold text-indigo-600 mb-2">
                  {stat.value}+
                </h3>
                <p className="text-lg font-semibold text-gray-700">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Featured Products Section */}
      <motion.div
        className="container mx-auto py-12"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <FeaturedProducts />
        </div>
      </motion.div>

      {/* Brands We Work With Section */}
      <BrandsWeWorkWith />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Call to Action Section */}
      <motion.div
        className="py-12 bg-gradient-to-r from-indigo-700 to-blue-600 text-white"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6">Ready to Shop?</h2>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Start Shopping
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
