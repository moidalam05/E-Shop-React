/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ShopCards from "./ShopCards";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import shopProductsActionCreator from "../actions/shopProductsActionCreator";
import { useLocation } from "react-router-dom";
import productsByCategoryActionCreator from "../actions/productsByCategoryActionCreator";

const ShopMain = ({ slug, products }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const shopProducts = useSelector((state) => state.shopProductsReducer);
  const productsByCategory = useSelector(
    (state) => state.productByCategoryReducer
  );
  const [hasMore, setHasMore] = useState(true);

  const fetchShopProducts = async () => {
    setIsFetching(true);
    try {
      if (location.pathname === "/shop") {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=30&skip=${shopProducts.length}&select=title,price,discountPercentage,rating,availabilityStatus,images`
        );
        const newProducts = response.data.products;
        if (newProducts.length === 0) {
          setHasMore(false);
        } else {
          dispatch(
            shopProductsActionCreator([...shopProducts, ...newProducts])
          );
        }
      } else if (location.pathname === `/category/${slug}`) {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${slug}`
        );
        const newProducts = response.data.products;
        if (newProducts.length === 0) {
          setHasMore(false);
        } else {
          dispatch(productsByCategoryActionCreator(newProducts));
          setHasMore(false);
        }
      }
    } catch (error) {
      console.log("Error in fetching shop products:", error.message);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchShopProducts();
  }, [location.pathname, slug]);

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

  const productsToRender =
    location.pathname === "/shop" ? shopProducts : productsByCategory;

  return (
    <div className="lg:w-3/4 w-full bg-white shadow-lg">
      <h1 className="p-4 text-2xl font-semibold">Showing Products</h1>
      <div className="p-4 space-y-6">
        <div className="w-full">
          <ShopCards Products={productsToRender} products={products} />
        </div>
        {isFetching && <p className="text-center">Loading more products...</p>}
      </div>
    </div>
  );
};

export default ShopMain;
