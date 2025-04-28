import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import loginActionCreator from "../actions/loginActionCreator";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    isLoggedIn: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storeData = useSelector((state) => {
    return state.signupReducer;
  });

  const handleLoginClick = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      dispatch(loginActionCreator(formData));
      if (
        formData.email === storeData.email &&
        formData.password === storeData.password
      ) {
        navigate("/");
        toast.success("User login successful!");
      } else {
        toast.error("Please enter valid credentials!");
      }
    } else {
      toast.error("Please fill all the fields!");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login Here
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={formData.rememberMe}
                onChange={(e) =>
                  setFormData({ ...formData, rememberMe: e.target.checked })
                }
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            onClick={handleLoginClick}
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-98 transition duration-300 ease-in-out cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
