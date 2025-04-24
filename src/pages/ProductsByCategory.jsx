import React from "react";
import ShopSidebar from "../components/ShopSidebar";
import ShopMain from "../components/ShopMain";
import { useParams } from "react-router-dom";

const ProductsByCategory = () => {
  const { slug } = useParams();
  return (
    <div className="flex justify-between gap-4 p-2 bg-gray-100">
      <ShopSidebar />
      <ShopMain slug={slug} />
    </div>
  );
};

export default ProductsByCategory;
