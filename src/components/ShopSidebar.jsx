import React from "react";

const ShopSidebar = () => {
  return (
    <div className="w-1/4 hidden md:block bg-white shadow-lg">
      <h1 className="p-4 text-lg font-semibold">Filters</h1>
      <div>
        <div className="p-4 space-y-6">
          {/* Price Filter */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Price</h2>
            <input type="range" min="0" max="1000" className="w-full" />
            <div className="flex justify-between text-sm mt-1">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Brand</h2>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Brand A
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Brand B
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Brand C
                </label>
              </li>
            </ul>
          </div>

          {/* Category Filter */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Category</h2>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Electronics
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Clothing
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Home Appliances
                </label>
              </li>
            </ul>
          </div>

          {/* More Filters */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Filters</h2>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Free Shipping
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  On Sale
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
