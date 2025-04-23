import React from "react";
import ShopSidebar from "../components/ShopSidebar";
import ShopMain from "../components/ShopMain";

const Shop = () => {
  return (
    <div className="flex justify-between gap-4 p-2 bg-gray-100">
      <ShopSidebar />
      <ShopMain />
    </div>
  );
};

export default Shop;
