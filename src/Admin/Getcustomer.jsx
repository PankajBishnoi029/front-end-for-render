import React, { useState, useEffect } from "react";
import axios from "axios";

function GetCustomer() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Retrieve Aemail from localStorage on component mount
  const [Aemail, setAemail] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.Aemail) {
      setAemail(storedUser.Aemail);
      fetchCustomers(storedUser.Aemail);
    } else {
      setError("Admin ID (Aemail) is not available.");
    }
  }, []);

  const fetchCustomers = async (Aemail) => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://backend-for-render-1.onrender.com/get-customers",
        {
          Aemail: Aemail,
        }
      );
      if (response.data.customers) {
        setCustomers(response.data.customers);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error("Error fetching customers:", err);
      setError("An error occurred while fetching customers.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (Uid) => {
    if (!Aemail) {
      setError("Admin ID (Aemail) is required to delete a customer.");
      return;
    }
    try {
      const response = await axios.delete(
        "https://backend-for-render-1.onrender.com/delete-customer",
        {
          data: { Aemail: Aemail, Uid },
        }
      );
      if (response.status === 200) {
        // Remove the deleted customer from the state
        setCustomers(customers.filter((customer) => customer.Uid !== Uid));
        setError(""); // Clear error on successful deletion
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error("Error deleting customer:", err);
      setError("An error occurred while deleting the customer.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Customer Lookup</h1>

      {error && <div className="text-red-500 text-center mt-4">{error}</div>}

      {loading ? (
        <p className="text-center">Loading customers...</p>
      ) : (
        customers.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Customers:</h2>
            <ul className="list-none p-0">
              {customers.map((customer) => (
                <li
                  key={customer._id}
                  className="border-b border-gray-200 py-4 flex justify-between items-center"
                >
                  <div>
                    <p>
                      <strong>Name:</strong> {customer.Uname}
                    </p>
                    <p>
                      <strong>Email:</strong> {customer.email}
                    </p>
                    <p>
                      <strong>Address:</strong> {customer.address}
                    </p>
                    <p>
                      <strong>Phone:</strong> {customer.phone}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(customer.Uid)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}

export default GetCustomer;
