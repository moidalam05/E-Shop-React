import React, { useEffect, useState } from "react";
import { FaCreditCard, FaUniversity, FaMobileAlt } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const [discount, setDiscount] = useState(0);

  const totalPrice = useSelector((state) => state.totalPriceReducer || 0);

  const paymentOptions = [
    {
      label: "Credit Card",
      value: "creditcard",
      icon: <FaCreditCard size={20} />,
    },
    {
      label: "Debit Card",
      value: "debitcard",
      icon: <FaCreditCard size={20} />,
    },
    { label: "UPI", value: "upi", icon: <FaMobileAlt size={20} /> },
    {
      label: "Net Banking",
      value: "netbanking",
      icon: <FaUniversity size={20} />,
    },
    {
      label: "Cash on Delivery",
      value: "cashondelivery",
      icon: <MdOutlineAttachMoney size={22} />,
    },
  ];

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      console.log("Payment submitted:", selectedOption);
      navigate("/checkout/payment/success");
    }
  };

  useEffect(() => {
    setDiscount(Math.floor(Math.random() * 5));
  }, [setDiscount]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200 p-6">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-6xl w-full flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 bg-blue-400 text-white p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Select Payment
          </h2>
          <ul className="space-y-4">
            {paymentOptions.map((option) => (
              <li key={option.value}>
                <button
                  className={`flex items-center w-full p-3 rounded-lg transition-all ${
                    selectedOption === option.value
                      ? "bg-white text-indigo-600 font-semibold"
                      : "hover:bg-indigo-600 hover:bg-opacity-30"
                  }`}
                  onClick={() => setSelectedOption(option.value)}
                >
                  <span className="mr-3">{option.icon}</span>
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Section */}
        <div className="flex-1 p-8 flex flex-col md:flex-row gap-8">
          {/* Left Form Section */}
          <div className="flex-1">
            {!selectedOption && (
              <div className="flex justify-center items-center h-full text-gray-500 text-xl">
                Please select a payment method
              </div>
            )}

            <div className="max-w-md mx-auto space-y-6">
              {selectedOption === "creditcard" && (
                <PaymentForm
                  handlePaymentSubmit={handlePaymentSubmit}
                  type="Credit Card"
                />
              )}
              {selectedOption === "debitcard" && (
                <PaymentForm
                  handlePaymentSubmit={handlePaymentSubmit}
                  type="Debit Card"
                />
              )}
              {selectedOption === "upi" && (
                <UPIForm handlePaymentSubmit={handlePaymentSubmit} />
              )}
              {selectedOption === "netbanking" && (
                <NetBankingForm handlePaymentSubmit={handlePaymentSubmit} />
              )}
              {selectedOption === "cashondelivery" && (
                <CashOnDelivery handlePaymentSubmit={handlePaymentSubmit} />
              )}
            </div>

            {selectedOption && (
              <div className="text-center mt-8 text-gray-400 text-sm">
                🔒 Secure SSL Encrypted Payment
              </div>
            )}
          </div>

          {/* Right Order Summary Section */}
          <div className="w-full md:w-1/3 bg-gray-50 rounded-lg p-6 shadow-md h-fit">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              Order Summary
            </h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Item(s) Total:</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges:</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span className="text-green-600">-${discount}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-gray-800">
                <span>Grand Total:</span>
                <span>${totalPrice - discount}</span>
              </div>
            </div>

            {/* Recommended Offer */}
            <div className="mt-6 p-4 bg-indigo-100 text-indigo-700 text-sm rounded-lg">
              🔥 Get 5% Cashback with XYZ Bank Cards!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components

const PaymentForm = ({ type, handlePaymentSubmit }) => (
  <>
    <h2 className="text-xl font-bold text-gray-700 text-center mb-4">
      {type} Payment
    </h2>
    <form className="space-y-5">
      <Input label="Cardholder Name" placeholder="John Doe" />
      <Input label="Card Number" placeholder="1234 5678 9012 3456" />
      <div className="flex space-x-4">
        <Input label="Expiry Date" placeholder="MM/YY" />
        <Input label="CVV" placeholder="123" type="password" />
      </div>
      <SubmitButton handlePaymentSubmit={handlePaymentSubmit} />
    </form>
  </>
);

const UPIForm = ({ handlePaymentSubmit }) => (
  <>
    <h2 className="text-xl font-bold text-gray-700 text-center mb-4">
      UPI Payment
    </h2>
    <form className="space-y-5">
      <Input label="UPI ID" placeholder="example@upi" />
      <SubmitButton handlePaymentSubmit={handlePaymentSubmit} />
    </form>
  </>
);

const NetBankingForm = ({ handlePaymentSubmit }) => (
  <>
    <h2 className="text-xl font-bold text-gray-700 text-center mb-4">
      Net Banking
    </h2>
    <form className="space-y-5">
      <Input label="Bank Name" placeholder="Select your bank" />
      <Input label="Account Number" placeholder="1234567890" />
      <SubmitButton handlePaymentSubmit={handlePaymentSubmit} />
    </form>
  </>
);

const CashOnDelivery = ({ handlePaymentSubmit }) => (
  <>
    <h2 className="text-xl font-bold text-gray-700 text-center mb-4">
      Cash on Delivery
    </h2>
    <div className="text-center text-gray-600">
      <p>Pay with cash upon delivery of your order.</p>
    </div>
    <div className="mt-6">
      <SubmitButton
        label="Confirm Order"
        handlePaymentSubmit={handlePaymentSubmit}
      />
    </div>
  </>
);

const Input = ({ label, placeholder, type = "text" }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
    />
  </div>
);

const SubmitButton = ({ label = "Pay Now", handlePaymentSubmit }) => (
  <button
    onClick={handlePaymentSubmit}
    type="button"
    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition cursor-pointer"
  >
    {label}
  </button>
);

export default Payment;
