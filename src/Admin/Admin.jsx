import React from "react";

function Admin() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={() => (window.location.href = "/Adminsignup")}
            className="w-full max-w-xs py-3 px-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Admin Signup
          </button>
          <button
            onClick={() => (window.location.href = "/Adminlogin")}
            className="w-full max-w-xs py-3 px-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
