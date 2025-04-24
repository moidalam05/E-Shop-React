import { FaTrashAlt } from "react-icons/fa";
const Cart = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h1>

        {/* Cart Items */}
        <div className="space-y-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Product"
                  className="w-24 h-24 object-cover rounded-lg shadow-sm"
                />
                <div>
                  <h2 className="text-xl font-medium text-gray-900">
                    Product Name
                  </h2>
                  <p className="text-sm text-gray-500">Category</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold text-blue-600">$99.99</p>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
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
            <p className="text-2xl font-bold text-gray-900">$199.98</p>
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
