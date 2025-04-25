/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateCartQuantity } from "../actions/cartActionCreator";
const Cart = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const cartData = useSelector((state) => state.cartReducer || []);

  const calculateTotalPrice = () => {
    let total = 0;
    cartData?.cartItems.forEach((item) => {
      total += item.price;
    });
    setTotalPrice(total);
  };

  const handleQuantityChange = (e, id) => {
    const newQty = parseInt(e.target.value) || 1;
    setQuantity(newQty);

    const updatedItems = cartData.cartItems.map((item) => {
      if (item.id === id) {
        const basePrice = item.basePrice || item.price;
        return {
          ...item,
          basePrice,
          quantity: newQty,
          price: Math.round(basePrice * newQty * 100) / 100,
        };
      }
      return item;
    });

    cartData.cartItems = updatedItems;
    dispatch(updateCartQuantity(id, quantity));
    calculateTotalPrice();
  };

  console.log("cartData", cartData.totalQuantity);

  useEffect(() => {
    calculateTotalPrice();
    // handleQuantityChange();
  }, [totalPrice, cartData?.cartItems, setTotalPrice]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h1>

        {/* Cart Items */}
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
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold text-blue-600">
                  {cartItem.price}
                </p>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(e, cartItem.id)}
                  className="w-16 border rounded-md text-center py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="text-red-500 hover:text-red-700 transition">
                  <FaTrashAlt size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total + Checkout */}
        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-lg text-gray-700">Total</h2>
            <p className="text-2xl font-bold text-gray-900">
              {Math.round(totalPrice * 100) / 100}
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all w-full sm:w-auto">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
