import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, house, street, city, state, pincode, country } =
      formData;

    if (
      !name &&
      !email &&
      !phone &&
      !house &&
      !street &&
      !city &&
      !state &&
      !pincode &&
      !country
    ) {
      toast.error("Please fill all the fields!");
      return;
    }
    if (phone.length !== 10) {
      toast.error("Please enter valid phone number!");
      return;
    }
    if (pincode.length !== 6) {
      toast.error("Please enter valid pincode!");
      return;
    }
    if (isNaN(pincode) && isNaN(phone)) {
      toast.error("Please enter valid pincode and phone number!");
      return;
    }
    navigate("/checkout/payment");
    setFormData({
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
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-indigo-300 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          Shipping Details
        </h2>
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
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
              House No. / Building Name <span className="text-red-500">*</span>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Landmark
            </label>
            <input
              type="text"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street / Area <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pincode <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md "
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-md font-semibold hover:shadow-md transition duration-300 mt-4 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
