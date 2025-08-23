import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import ProductsByCategory from "./pages/ProductsByCategory";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import SearchProducts from "./pages/SearchProducts";
import Success from "./pages/Success";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:slug" element={<ProductsByCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/search" element={<SearchProducts />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route
          path="/checkout/success"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout/payment/success"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
