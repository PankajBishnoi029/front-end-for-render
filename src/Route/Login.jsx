// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

// // function Login() {
// //   const [formData, setFormData] = useState({
// //     Uemail: "",
// //     password: "",
// //   });

// //   const [errorMessage, setErrorMessage] = useState("");
// //   const [successMessage, setSuccessMessage] = useState("");
// //   const navigate = useNavigate(); // For navigation

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setErrorMessage(""); // Clear previous messages
// //     setSuccessMessage(""); // Clear previous messages

// //     try {
// //       const response = await axios.post(
// //         "https://backend-for-render-1.onrender.com/login",
// //         formData
// //       );

// //       if (response.status === 200) {
// //         setSuccessMessage("Login successful!");
// //         // localStorage.setItem("user", JSON.stringify(response.data.user));

// //         // Redirect to home page after successful login
// //         setTimeout(() => {
// //           navigate("/"); // Navigate to home page
// //         }, 2000);
// //       }
// //     } catch (error) {
// //       console.error("Login error:", error);
// //       // setErrorMessage("Invalid User ID or Password. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
// //       <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div className="flex flex-col">
// //           <label htmlFor="Uemail" className="text-lg font-semibold mb-2">
// //             User ID:
// //           </label>
// //           <input
// //             type="text"
// //             id="Uemail"
// //             name="Uemail"
// //             value={formData.Uemail}
// //             onChange={handleChange}
// //             required
// //             className="p-2 border border-gray-300 rounded-md"
// //           />
// //         </div>
// //         <div className="flex flex-col">
// //           <label htmlFor="password" className="text-lg font-semibold mb-2">
// //             Password:
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //             className="p-2 border border-gray-300 rounded-md"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
// //         >
// //           Login
// //         </button>
// //         <div className="flex flex-col items-center">
// //           or
// //           <br />
// //           <div className="">
// //             Do not have an account{" "}
// //             <button className="text-[blue]" onClick={() => navigate("/login")}>
// //               Go to Login
// //             </button>
// //           </div>
// //         </div>
// //       </form>

// //       {successMessage && (
// //         <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-md">
// //           <h2 className="text-lg font-semibold">Success</h2>
// //           <p>{successMessage}</p>
// //         </div>
// //       )}

// //       {errorMessage && (
// //         <div className="mt-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-md">
// //           <h2 className="text-lg font-semibold">Error</h2>
// //           <p>{errorMessage}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

// function Login() {
//   const [formData, setFormData] = useState({
//     Uemail: "",
//     password: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate(); // For navigation

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleClick = async () => {
//     setErrorMessage(""); // Clear previous messages
//     setSuccessMessage(""); // Clear previous messages

//     try {
//       const response = await axios.post(
//         "https://backend-for-render-1.onrender.com/login",
//         formData
//       );

//       if (response.status === 200) {
//         setSuccessMessage("Login successful!");
//         // localStorage.setItem("user", JSON.stringify(response.data.user));

//         // Redirect to home page after successful login
//         setTimeout(() => {
//           navigate("/"); // Navigate to home page
//         }, 2000);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setErrorMessage("Invalid User ID or Password. Please try again.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
//       <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
//       <form className="space-y-4">
//         <div className="flex flex-col">
//           <label htmlFor="Uemail" className="text-lg font-semibold mb-2">
//             User ID:
//           </label>
//           <input
//             type="text"
//             id="Uemail"
//             name="Uemail"
//             value={formData.Uemail}
//             onChange={handleChange}
//             required
//             className="p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="password" className="text-lg font-semibold mb-2">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <button
//           type="button" // Changed from submit to button
//           onClick={handleClick} // Added onClick handler
//           className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         >
//           Login
//         </button>
//         <div className="flex flex-col items-center">
//           or
//           <br />
//           <div className="">
//             Do not have an account{" "}
//             <button className="text-[blue]" onClick={() => navigate("/signup")}>
//               Go to Signup
//             </button>
//           </div>
//         </div>
//       </form>

//       {successMessage && (
//         <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-md">
//           <h2 className="text-lg font-semibold">Success</h2>
//           <p>{successMessage}</p>
//         </div>
//       )}

//       {errorMessage && (
//         <div className="mt-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-md">
//           <h2 className="text-lg font-semibold">Error</h2>
//           <p>{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

function Login() {
  const [formData, setFormData] = useState({
    Uemail: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // For navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = async () => {
    setErrorMessage(""); // Clear previous messages
    setSuccessMessage(""); // Clear previous messages

    // Validate required fields
    if (!formData.Uemail) {
      setErrorMessage("User ID is required");
      return;
    }

    if (!formData.password) {
      setErrorMessage("Password is required");
      return;
    }

    try {
      const response = await axios.post(
        "https://backend-for-render-1.onrender.com/login",
        formData
      );

      if (response.status === 200) {
        setSuccessMessage("Login successful!");
        // localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redirect to home page after successful login
        setTimeout(() => {
          navigate("/"); // Navigate to home page
        }, 2000);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Invalid User ID or Password. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="Uemail" className="text-lg font-semibold mb-2">
            User ID:
          </label>
          <input
            type="text"
            id="Uemail"
            name="Uemail"
            value={formData.Uemail}
            onChange={handleChange}
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="button" // Changed from submit to button
          onClick={handleClick} // Added onClick handler
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        <div className="flex flex-col items-center">
          or
          <br />
          <div className="">
            Do not have an account{" "}
            <button className="text-[blue]" onClick={() => navigate("/signup")}>
              Go to Signup
            </button>
          </div>
        </div>
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
    </div>
  );
}

export default Login;
