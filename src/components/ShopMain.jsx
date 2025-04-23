import React from "react";
import ShopCards from "./ShopCards";

const ShopMain = () => {
  return (
    <div className="w-3/4 bg-white shadow-lg">
      <h1 className="p-4 text-lg font-semibold">Showind Products</h1>
      <div>
        <div className="p-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ShopCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
