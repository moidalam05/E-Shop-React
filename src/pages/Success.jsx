import React, { useEffect } from "react";
import { MdCheckCircle } from "react-icons/md";
import Confetti from "react-confetti";

const Success = () => {
  const [showConfetti, setShowConfetti] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 relative overflow-hidden">
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md animate-bounce-slow">
        <div className="flex flex-col items-center space-y-4">
          {/* Success Icon */}
          <MdCheckCircle className="text-green-500" size={80} />

          {/* Thank you message */}
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Thank you for your order!
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-center">
            Your payment was successful. We've sent you a confirmation email.
          </p>

          {/* Order Summary */}
          <div className="w-full bg-gray-50 border rounded-md p-4 mt-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Order Summary
            </h2>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Order ID:</span>
              <span>#123456789</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Payment Method:</span>
              <span>Credit Card</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Amount Paid:</span>
              <span>₹1,999</span>
            </div>
          </div>

          {/* Continue Shopping button */}
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
