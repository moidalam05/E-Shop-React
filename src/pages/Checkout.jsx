import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import useRazorpay from "../hooks/useRazorpay";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const payNow = useRazorpay();
  const nagivate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    house: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    landmark: "",
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const cartData = useSelector((state) => state.cartReducer || []);

  const calculateTotalPrice = () => {
    let total = 0;
    cartData?.cartItems.forEach((item) => {
      total += item.price;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [totalPrice, cartData?.cartItems, setTotalPrice]);

  const handlePayment = () => {
    if (cartData?.cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.house ||
      !formData.street ||
      !formData.city ||
      !formData.state ||
      !formData.pincode ||
      !formData.country
    ) {
      toast.error("Please fill all the required fields!");
      return;
    }
    if (formData.phone.length !== 10) {
      toast.error("Please enter valid phone number!");
      return;
    }
    if (formData.pincode.length !== 6) {
      toast.error("Please enter valid pincode!");
      return;
    }
    if (isNaN(formData.pincode) && isNaN(formData.phone)) {
      toast.error("Please enter valid pincode and phone number!");
      return;
    }
    const paymentDetails = payNow(Number(totalPrice));
    console.log(paymentDetails);

    if (paymentDetails) {
      nagivate("/checkout/sucsess");
    }
  };

  return (
    <div className="p-10">
      <div className="flex items-center justify-between gap-10">
        <div className="bg-white p-8 rounded-2xl w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
            Shipping Details
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>

            {/* House */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                House No. / Building Name{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="House No. / Building Name"
                value={formData.house}
                onChange={(e) =>
                  setFormData({ ...formData, house: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>

            {/* landmark */}
            <div>
              <label
                htmlFor="landmark"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Landmark
              </label>
              <input
                type="text"
                id="landmark"
                name="landmark"
                placeholder="Landmark"
                value={formData.landmark}
                onChange={(e) =>
                  setFormData({ ...formData, landmark: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>

            {/* Street */}
            <div>
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Street / Area <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="street"
                name="street"
                placeholder="Street / Area"
                value={formData.street}
                onChange={(e) =>
                  setFormData({ ...formData, street: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>

            {/* State */}
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>

            {/* Pincode */}
            <div>
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pincode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>
          </form>
        </div>
        {/* Right */}
        <div className="p-8 rounded-2xl">
          <div className="space-y-6">
            {cartData?.cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={cartItem.images[0]}
                    alt={cartItem.title}
                    className="w-24 h-24 object-cover rounded-lg shadow-sm"
                  />
                  <div>
                    <h2 className="text-xl font-medium text-gray-900">
                      {cartItem.title}
                    </h2>
                    <p className="text-sm text-gray-500">{cartItem.category}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {cartItem.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-lg font-semibold text-blue-600">
                    {cartItem.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Total + Checkout */}
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-lg text-gray-700">Total</h2>
            <p className="text-2xl font-bold text-gray-900">
              {Math.round(totalPrice * 100) / 100}
            </p>
          </div>
        </div>
      </div>
      {/* Submit Button */}

      <button
        onClick={handlePayment}
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-md font-semibold hover:shadow-md transition duration-300 mt-10 cursor-pointer px-10 mx-auto block"
      >
        Continue to Payment
      </button>
    </div>
  );
};

export default Checkout;
