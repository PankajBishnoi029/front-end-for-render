import React, { useState } from "react";
import axios from "axios";

function AdminSignup() {
  const [formData, setFormData] = useState({
    Aid: "",
    Aname: "",
    address: "",
    phone: "",
    Aemail: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-for-render-1.onrender.com/signupAdmin",
        formData
      );
      const responseData = response.data;
      localStorage.setItem("user", JSON.stringify(responseData.user));
      setMessage(responseData.message);
    } catch (error) {
      console.error("Error during signup:", error);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Signup</h2>
        {message && (
          <div className="mb-4 p-3 text-center text-red-500">{message}</div>
        )}
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="Aid"
            >
              Admin ID
            </label>
            <input
              type="text"
              id="Aid"
              name="Aid"
              value={formData.Aid}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div> */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="Aname"
            >
              Name
            </label>
            <input
              type="text"
              id="Aname"
              name="Aname"
              value={formData.Aname}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="Aemail"
            >
              Email
            </label>
            <input
              type="email"
              id="Aemail"
              name="Aemail"
              value={formData.Aemail}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Signup
          </button>
          <div className="mt-4 text-center">
            Already have an account?{" "}
            <button
              onClick={() => (window.location.href = "/Adminlogin")}
              className="text-blue-500 underline"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 space-y-2">
          <button
            onClick={() => (window.location.href = "/add-product")}
            className="w-full max-w-xs py-3 px-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Add Products
          </button>
          <button
            onClick={() => (window.location.href = "/delete-product")}
            className="w-full max-w-xs py-3 px-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Delete Products
          </button>
          <button
            onClick={() => (window.location.href = "/Update")}
            className="w-full max-w-xs py-3 px-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Update Details
          </button>
          <button
            onClick={() => (window.location.href = "/Updatecourse")}
            className="w-full max-w-xs py-3 px-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Update Product Details
          </button>
          <button
            onClick={() => (window.location.href = "/Getcustomer")}
            className="w-full max-w-xs py-3 px-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Get Customer
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminSignup;
