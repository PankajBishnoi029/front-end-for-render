import React, { useState } from "react";
import axios from "axios";

function AdminLogin() {
  const [formData, setFormData] = useState({
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
        "https://backend-for-render-1.onrender.com/loginAdmin",
        formData
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        {message && (
          <div className="mb-4 p-3 text-center text-red-500">{message}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="Aemail"
            >
              Admin ID
            </label>
            <input
              type="text"
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
            Login
          </button>
          <div className="">
            do not have account
            <button
              onClick={() => (window.location.href = "/Adminsignup")}
              className="text-blue-500 underline"
            >
              sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
