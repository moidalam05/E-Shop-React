import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCartActionCreator } from "../actions/cartActionCreator";
import toast from "react-hot-toast";
import Reviews from "../components/Reviews";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = () => {
    if (addedToCart) return;
    dispatch(addToCartActionCreator({ ...product }));
    toast.success("Product added to cart!");
    setAddedToCart(true);
  };

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        setProduct(response.data);
        setImage(response.data.images[0]);
        console.log("product", response.data);
      } catch (error) {
        console.log("error in product details", error || error.message);
      }
    };
    fetchProductById();
  }, [productId]);
  const selectImage = (image) => {
    setImage(image);
  };

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 mt-8 font-sans max-w-7xl mx-auto text-gray-800">
      {/* Product Overview */}
      <div className="grid md:grid-cols-2 gap-10 mb-12 relative">
        {/* Product Image Gallery */}
        <div>
          <img
            src={image}
            alt={product.title}
            className="w-[500px] h-[400px] object-contain rounded-lg hover:scale-110 duration-200 ease-in"
          />
          <div className="flex gap-3 mt-4 overflow-hidden">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i}`}
                onClick={() => selectImage(img)}
                className="w-20 h-20 rounded-lg object-contain transition cursor-pointer hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>

          <div className="text-2xl font-bold text-blue-600">
            ${product.price}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>
            <p>
              <strong>In Stock:</strong> {product.stock}
            </p>
            <p>
              <strong>Availability:</strong> {product.availabilityStatus}
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer">
              Buy Now
            </button>
            <button
              onClick={addToCart}
              className="px-6 py-2 rounded-lg border text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            >
              {addedToCart ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>

          <div className="pt-6 border-t">
            <h3 className="font-semibold mb-2 text-lg">More Information</h3>
            <ul className="list-disc space-y-1 text-sm pl-5 text-gray-600">
              <li>
                <strong>Discount:</strong>{" "}
                {Math.round(product.discountPercentage)}% off
              </li>
              <li>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </li>
              <li>
                <strong>Shipping:</strong> {product.shippingInformation}
              </li>
              <li>
                <strong>Return Policy:</strong> {product.returnPolicy}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <Reviews reviews={product.reviews} />

      <RelatedProducts
        category={product?.category}
        setProduct={setProduct}
        setImage={setImage}
      />
    </div>
  );
};

export default ProductDetails;
