import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Reviews = ({ reviews }) => {
  const [selectStar, setSelectStar] = useState(0);

  const handleStarClick = (index) => setSelectStar(index);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left - Existing Reviews */}
        <div className="flex-1 space-y-4">
          {reviews?.length > 0 ? (
            reviews.map((review, index) => (
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
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>

        {/* Right - Write Review Form */}
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
              <label className="block text-sm font-medium mb-1">Comment</label>
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
  );
};

export default Reviews;
