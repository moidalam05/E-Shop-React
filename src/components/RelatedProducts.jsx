import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import reletedProductsActionCreator from "../actions/reletedProductActionCreator";
import Card from "./Card";

const RelatedProducts = ({ category, setProduct, setImage }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState({});
  const reletedProducts = useSelector((state) => state.relatedProductReducer);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (!category) return <>loading...</>;
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );
        dispatch(reletedProductsActionCreator(response.data.products));
      } catch (error) {
        console.log("error in related product", error || error.message);
      }
    };

    fetchRelatedProducts();
  }, [dispatch, reletedProducts, category]);

  if (!category) {
    return <div>Loading...</div>;
  }

  const handleLiked = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  console.log("reletedProducts", reletedProducts);

  // useEffect(() => {
  //   const fetchRelatedProducts = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://dummyjson.com/products/category/${category}`
  //       );
  //       dispatch(reletedProductsActionCreator(response.data.products));
  //     } catch (error) {
  //       console.log("error in related product", error || error.message);
  //     }
  //   };

  //   if (reletedProducts.length === 0) {
  //     fetchRelatedProducts();
  //   }
  // }, [dispatch, reletedProducts, category]);

  const handleProductClick = (product) => {
    setProduct(product);
    setImage(product.images[0]);
  };

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center py-8">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reletedProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
            handleLiked={handleLiked}
            liked={liked}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
