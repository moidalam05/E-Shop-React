import React, { useEffect } from "react";
import ShopCards from "./ShopCards";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import shopProductsActionCreator from "../actions/shopProductsActionCreator";

const ShopMain = () => {
  const dispatch = useDispatch();
  const fetchShopProducts = async (dispatch) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      dispatch(shopProductsActionCreator(response.data.products));
    } catch (error) {
      console.log("error in featured product", error || error.message);
    }
  };
  useEffect(() => {
    fetchShopProducts(dispatch);
  }, [dispatch]);

  const shopProducts = useSelector((state) => state.shopProductsReducer);
  console.log("shopProducts", shopProducts);

  return (
    <div className="lg:w-3/4 w-full bg-white shadow-lg">
      <h1 className="p-4 text-2xl font-semibold">Showind Products</h1>
      <div>
        <div className="p-4 space-y-6">
          <div className="w-full">
            <ShopCards shopProducts={shopProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
