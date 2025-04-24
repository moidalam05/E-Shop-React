import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";
import axios from "axios";

const ProductDetails = () => {
  const { id: productId } = useParams();
  const [selectStar, setSelectStar] = useState(0);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");

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

  const handleStarClick = (index) => setSelectStar(index);
  const selectImage = (image) => {
    setImage(image);
  };

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 mt-8 font-sans max-w-7xl mx-auto text-gray-800">
      {/* Product Overview */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Product Image Gallery */}
        <div>
          <img
            src={image}
            alt={product.title}
            className="w-[500px] h-[400px] object-cover rounded-lg hover:scale-110 duration-200 ease-in"
          />
          <div className="flex gap-3 mt-4 overflow-hidden">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i}`}
                onClick={() => selectImage(img)}
                className="w-20 h-20 rounded-lg object-cover transition cursor-pointer hover:scale-105"
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
            <button className="px-6 py-2 rounded-lg border text-gray-700 hover:bg-gray-100 transition cursor-pointer">
              Add to Cart
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
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-lg">
                    {review.reviewerName}
                  </h4>
                  <span className="text-yellow-500 text-base">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{review.comment}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side - Review Form */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
            <form className="grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      onClick={() => handleStarClick(star)}
                      key={star}
                      className="cursor-pointer"
                    >
                      {star <= selectStar ? (
                        <i className="text-yellow-500">
                          <FaStar />
                        </i>
                      ) : (
                        <i className="text-gray-400">
                          <CiStar />
                        </i>
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Comment
                </label>
                <textarea
                  rows="1"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Write your thoughts..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
      <RelatedProducts
        category={product?.category}
        setProduct={setProduct}
        setImage={setImage}
      />
    </div>
  );
};

export default ProductDetails;
