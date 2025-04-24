/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ShopCards from "./ShopCards";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import shopProductsActionCreator from "../actions/shopProductsActionCreator";

const ShopMain = () => {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const shopProducts = useSelector((state) => state.shopProductsReducer);
  const [hasMore, setHasMore] = useState(true);

  const fetchShopProducts = async () => {
    setIsFetching(true);
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=30&skip=${shopProducts.length}&select=title,price,discountPercentage,rating,availabilityStatus,images`
      );
      const newProducts = response.data.products;

      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        dispatch(shopProductsActionCreator(newProducts));
      }
    } catch (error) {
      console.log("error in fetching shop products:", error.message);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (shopProducts.length === 0) fetchShopProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const scrollPercent = (scrollTop + windowHeight) / docHeight;

      if (scrollPercent >= 0.9 && !isFetching && hasMore) {
        fetchShopProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching, shopProducts.length, hasMore]);

  return (
    <div className="lg:w-3/4 w-full bg-white shadow-lg">
      <h1 className="p-4 text-2xl font-semibold">Showing Products</h1>
      <div className="p-4 space-y-6">
        <div className="w-full">
          <ShopCards shopProducts={shopProducts} />
        </div>
        {isFetching && <p className="text-center">Loading more products...</p>}
      </div>
    </div>
  );
};

export default ShopMain;
