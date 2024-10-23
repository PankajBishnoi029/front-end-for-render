import React, { useState, useEffect } from "react";
import axios from "axios";

function Deleteproduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Aemail, setAemail] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://backend-for-render-1.onrender.com/all-products"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const handleDelete = async (id) => {
    if (!Aemail) {
      setError("Admin ID (Aemail) is required.");
      return;
    }

    try {
      const response = await axios.delete(
        "https://backend-for-render-1.onrender.com/delete-product",
        {
          data: { Aemail, id },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.message === "Product deleted successfully") {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
        setError("");
        console.log("Product deleted:", response.data);
      } else {
        setError(`Failed to delete product: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error during product deletion:", error);
      setError("An error occurred during product deletion.");
    }
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>

      {/* Input field for Aemail */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">
          Admin ID (Aemail)
        </label>
        <input
          type="text"
          value={Aemail}
          onChange={(e) => setAemail(e.target.value)}
          placeholder="Enter Admin ID"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      {/* Display error message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="flex flex-wrap">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md m-2 w-80"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-lg font-semibold mb-4">₹{product.price}</p>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default Deleteproduct;
