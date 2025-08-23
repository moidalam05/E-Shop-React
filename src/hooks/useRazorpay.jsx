import { useCallback } from "react";
import toast from "react-hot-toast";

const useRazorpay = () => {
  const openRazorpay = useCallback((amount) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: amount * 100,
      currency: "INR",
      name: "E-SHOP",
      description:
        "Welcome to E-Shop, your one-stop destination for fashion, lifestyle, and more. Here you can explore a wide range of quality products at the best prices — from trendy clothes and stylish footwear to daily essentials.",
      image: "https://example.com/your_logo",
      handler: function (response) {
        toast.success("Payment Successful!");
        console.log("Payment ID:", response.razorpay_payment_id);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Demo Address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }, []);

  return openRazorpay;
};

export default useRazorpay;
