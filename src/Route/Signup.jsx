import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // UseNavigate for routing

function Signup() {
  // const [Uid, setUid] = useState(""); // Add Uid state
  const [Uname, setUname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [Uemail, setUemail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage(""); // Clear previous messages
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://backend-for-render-1.onrender.com/signup",
        {
          Uname,
          address,
          phone,
          Uemail,
          password,
        }
      );

      if (response.status === 201) {
        setSuccessMessage(response.data.message);

        // Store Uid and Uemail in localStorage
        localStorage.setItem("user1", JSON.stringify({ Uemail, password }));

        // Redirect after successful signup
        setTimeout(() => {
          navigate("/login"); // Navigate to login page
        }, 2000);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (err) {
      console.error("Error during signup:", err);
      setErrorMessage("An error occurred during signup.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <div className="flex flex-col">
          <label htmlFor="Uid" className="text-lg font-semibold mb-2">
            User ID:
          </label>
          <input
            type="text"
            id="Uid"
            value={Uid}
            onChange={(e) => setUid(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div> */}
        <div className="flex flex-col">
          <label htmlFor="Uname" className="text-lg font-semibold mb-2">
            Username:
          </label>
          <input
            type="text"
            id="Uname"
            value={Uname}
            onChange={(e) => setUname(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg font-semibold mb-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-lg font-semibold mb-2">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Uemail" className="text-lg font-semibold mb-2">
            Uemail:
          </label>
          <input
            type="email" // Change type to email for validation
            id="Uemail"
            value={Uemail}
            onChange={(e) => setUemail(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg font-semibold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>

      {successMessage && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-md">
          <h2 className="text-lg font-semibold">Success</h2>
          <p>{successMessage}</p>
        </div>
      )}

      {errorMessage && (
        <div className="mt-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-md">
          <h2 className="text-lg font-semibold">Error</h2>
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate("/login")}
          className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          Go to Login
        </button>

        <button
          onClick={() => navigate("/home")}
          className="py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Signup;
