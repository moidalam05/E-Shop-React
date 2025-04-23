import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
