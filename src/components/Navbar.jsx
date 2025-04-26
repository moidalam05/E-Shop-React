import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu, IoClose, IoSearch } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import categoryActionCreator from "../actions/categoryActionCreator";
import Category from "./Category";
import searchActionCreator from "../actions/searchActionCreator";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    toast.success("Logout successful!");
    navigate("/login");
  };

  const fetchGategory = async (dispatch) => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      dispatch(categoryActionCreator(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearchChange = async (e) => {
    e.preventDefault();
    try {
      const searchQuery = searchCategory;

      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchQuery}`
      );

      if (response.status === 200) {
        dispatch(searchActionCreator(response.data.products));
        setSearchCategory("");
        navigate("/products/search");
      }
    } catch (error) {
      console.log("error in search", error || error.message);
    }
  };

  const categoryData = useSelector((state) => state.categoryReducer);

  useEffect(() => {
    if (categoryData.length === 0) {
      fetchGategory(dispatch);
    }
  }, [dispatch, categoryData]);

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link
            to="/"
            className="flex items-center gap-1 bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text"
          >
            <FaShopify className="text-indigo-600" />
            <span>E-Shop</span>
          </Link>
        </div>
        <div className="hidden lg:flex items-stretch w-full max-w-3xl">
          <input
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            type="text"
            placeholder="Search by category..."
            className="flex-grow px-4 py-2 text-gray-700 border border-gray-400 rounded-l-full bg-white focus:outline-none focus:ring-1 focus:ring-indigo-400 transition duration-200"
          />
          <button
            type="submit"
            onClick={handleSearchChange}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 rounded-r-full transition duration-200 flex items-center cursor-pointer justify-center"
          >
            <IoSearch className="text-xl" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <NavLink
            to="/cart"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <i className="text-xl text-blue-600">
              <FaShoppingCart />
            </i>
          </NavLink>
          <button
            onClick={handleLogout}
            className="hidden md:block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition duration-300 cursor-pointer active:scale-98"
          >
            Logout
          </button>
          <button
            type="button"
            onClick={handleMenuClick}
            className="md:hidden text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <i className="text-2xl">{isMenuOpen ? <IoClose /> : <IoMenu />}</i>
          </button>
        </div>
      </div>
      <div className="md:hidden flex mb-2 px-4 items-stretch w-full max-w-4xl">
        <input
          type="text"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          placeholder="Search by category..."
          className="flex-grow px-4 py-2 text-gray-700 border border-gray-400 rounded-l-full bg-white focus:outline-none focus:ring-1 focus:ring-indigo-400 transition duration-200"
        />
        <button
          type="submit"
          onClick={handleSearchChange}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 rounded-r-full transition duration-200 flex items-center justify-center"
        >
          <IoSearch className="text-xl" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col w-full items-center space-y-4 px-4 py-3">
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r max-w-fit from-blue-500 to-indigo-600 text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition duration-300 cursor-pointer active:scale-98"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      <Category categoryData={categoryData} />
    </div>
  );
};

export default Navbar;
