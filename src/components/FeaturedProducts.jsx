import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import featuredProductActionCreator from "../actions/featureProductActionCreator";
import Card from "./Card";

const FeaturedProducts = () => {
  const [liked, setLiked] = useState({});
  const disptach = useDispatch();

  const handleLiked = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const featuredProducts = useSelector((state) => state.featuredProductReducer);

  const fetchFeaturedProduct = async (disptach) => {
    try {
      const response = await axios(
        "https://dummyjson.com/products?limit=8&skip=10&select=title,price,images,description,discountPercentage,rating,stock,brand,warrantyInformation,shippingInformation,availabilityStatus,reviews,returnPolicy,category"
      );
      disptach(featuredProductActionCreator(response.data.products));
    } catch (error) {
      console.log("error in featured product", error || error.message);
    }
  };
  useEffect(() => {
    if (featuredProducts.length === 0) {
      fetchFeaturedProduct(disptach);
    }
  }, [disptach, featuredProducts]);
  return (
    <>
      {featuredProducts.map((featuredProduct) => (
        <Card
          key={featuredProduct.id}
          handleLiked={handleLiked}
          liked={liked}
          featuredProduct={featuredProduct}
        />
      ))}
    </>
  );
};

export default FeaturedProducts;
