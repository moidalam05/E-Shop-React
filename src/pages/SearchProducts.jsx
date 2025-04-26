import React from "react";
import { useSelector } from "react-redux";
import ShopSidebar from "../components/ShopSidebar";
import ShopMain from "../components/ShopMain";

const SearchProducts = () => {
  const searchResult = useSelector((state) => state.searchReducer);

  return (
    <div className="flex justify-between gap-4 p-2 bg-gray-100">
      <ShopSidebar />
      <ShopMain products={searchResult} />
    </div>
  );
};

export default SearchProducts;
