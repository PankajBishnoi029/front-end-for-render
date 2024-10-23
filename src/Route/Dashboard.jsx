// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // function Dashboard() {
// // //   const [data, setData] = useState(null);
// // //   const [purchased, setPurchased] = useState([]);
// // //   const [markdone, setmark] = useState([]);

// // //   useEffect(() => {
// // //     const storedPurchased = localStorage.getItem("purchased");
// // //     if (storedPurchased) {
// // //       setPurchased(JSON.parse(storedPurchased));
// // //     } else {
// // //       localStorage.setItem("purchased", JSON.stringify([]));
// // //     }
// // //   }, []);

// // //   useEffect(() => {
// // //     const user = localStorage.getItem("user");
// // //     if (user) {
// // //       setData(JSON.parse(user));
// // //     }
// // //   }, []);

// // //   const courses = [
// // //     {
// // //       id: 1,
// // //       image:
// // //         "https://i.postimg.cc/dV9W0ZVZ/Copy-of-Copy-of-Copy-of-SVG-in-HTML.png",
// // //       name: "Front End",
// // //       price: 90000,
// // //       description: `Front-end Development involves creating the user interface using markup languages and other tools. It includes elements like buttons, texts, and alignments.`,
// // //     },
// // //     {
// // //       id: 2,
// // //       image: "https://i.postimg.cc/j53Q7ypC/backend-is-1200x808.webp",
// // //       name: "Back End",
// // //       price: 106000,
// // //       description: `Backend Development involves the logic, database, and other operations running behind the scenes to efficiently manage web servers.`,
// // //     },
// // //     {
// // //       id: 3,
// // //       image: "https://i.postimg.cc/05674Kgd/th-28.jpg",
// // //       name: "Full-stack",
// // //       price: 150000,
// // //       description: `Full Stack Developers can design complete web applications and websites, working on frontend, backend, database, and debugging.`,
// // //     },
// // //   ];

// // //   const handlePurchase = async (course) => {
// // //     const updatedPurchased = [...purchased, course];
// // //     setPurchased(updatedPurchased);
// // //     localStorage.setItem("purchased", JSON.stringify(updatedPurchased));

// // //     const user = JSON.parse(localStorage.getItem("user"));
// // //     if (!user) {
// // //       console.error("No user data found in localStorage");
// // //       return;
// // //     }

// // //     try {
// // //       const response = await axios.post("https://backend-for-render-1.onrender.com/purchase", {
// // //         Uid: user.Uid,
// // //         id: course.id,
// // //         name: course.name,
// // //         description: course.description,
// // //         price: course.price,
// // //         image: course.image,
// // //       });
// // //       console.log("Response from server:", response.data);
// // //     } catch (error) {
// // //       console.error("Error during purchase:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div
// // //       className="bg-cover h-[230vh]"
// // //       style={{
// // //         backgroundImage:
// // //           "url('https://i.postimg.cc/sD5w2jPW/istockphoto-1781685958-1024x1024.jpg')",
// // //         backgroundSize: "cover",
// // //         backgroundPosition: "center",
// // //       }}
// // //     >
// // //       <div>
// // //         <div className="flex h-[100px] border-b-2 items-center justify-around">
// // //           <div>Company Name</div>
// // //           <div className="rounded-[50px]">
// // //             <input
// // //               type="text"
// // //               placeholder="Search courses....."
// // //               className="h-[40px] w-[300px] rounded-[50px] pl-[20px] bg-[#d2d2e9]"
// // //             />
// // //           </div>
// // //           <button
// // //             className="h-[48px] w-[160px] rounded-[50px] bg-[#d2d2e9]"
// // //             onClick={() => (window.location.href = "/purchased")}
// // //           >
// // //             Purchased
// // //           </button>
// // //           <div className="ml-[90px]">
// // //             <button
// // //               className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9]"
// // //               onClick={() => (window.location.href = "/Signup")}
// // //             >
// // //               Signup
// // //             </button>
// // //             <button
// // //               className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9] ml-[10px]"
// // //               onClick={() => (window.location.href = "/Login")}
// // //             >
// // //               Login
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <div className="flex flex-wrap justify-center">
// // //           {courses.map((course) => {
// // //             return (
// // //               <div
// // //                 key={course.id}
// // //                 className="h-[540px] w-[300px] bg-[#ffffff] rounded-[30px] m-4 shadow-xl flex flex-col justify-between"
// // //               >
// // //                 <img
// // //                   src={course.image}
// // //                   alt={course.name}
// // //                   className="h-[250px] w-full rounded-t-[30px] object-cover"
// // //                 />
// // //                 <div className="p-4">
// // //                   <h3 className="text-xl font-bold">{course.name}</h3>
// // //                   <p className="text-gray-700">{course.description}</p>
// // //                   <p className="text-lg font-semibold">₹{course.price}</p>
// // //                 </div>
// // //                 <button
// // //                   className="mt-2 ml-[40px] w-[70%]  bg-[#1e90ff] text-white py-2 rounded "
// // //                   onClick={() => handlePurchase(course)}
// // //                 >
// // //                   Purchase
// // //                 </button>

// // //                 <br />
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // // Define HoverComponent as a separate component
// // const HoverComponent = () => {
// //   const [isHovered, setIsHovered] = useState(false);

// //   return (
// //     <div
// //       className="bg-gray-800 p-2"
// //       style={{ padding: "1rem", border: "1px solid gray" }}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //     >
// //       <div
// //         style={{
// //           display: isHovered ? "block" : "none",
// //           marginTop: "0.5rem",
// //           padding: "0.5rem",
// //           border: "1px solid gray",
// //         }}
// //       >
// //         <div className="list-none m-0 p-0 overflow-hidden">
// //           <div className="inline-block relative group">
// //             <div className="flex h-[100px] border-b-2 items-center justify-around">
// //               <button
// //                 className="h-[48px] w-[160px] rounded-[50px] bg-[#d2d2e9]"
// //                 onClick={() => (window.location.href = "/purchased")}
// //               >
// //                 Purchased
// //               </button>
// //               <div className="ml-[90px]">
// //                 <button
// //                   className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9]"
// //                   onClick={() => (window.location.href = "/Signup")}
// //                 >
// //                   Signup
// //                 </button>
// //                 <button
// //                   className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9] ml-[10px]"
// //                   onClick={() => (window.location.href = "/Login")}
// //                 >
// //                   Login
// //                 </button>
// //                 <button
// //                   className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9] ml-[10px]"
// //                   onClick={() => (window.location.href = "/Admin")}
// //                 >
// //                   open admin pannel
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // function Dashboard() {
// //   const [data, setData] = useState(null);
// //   const [purchased, setPurchased] = useState([]);
// //   const [markdone, setmark] = useState([]);

// //   useEffect(() => {
// //     const storedPurchased = localStorage.getItem("purchased");
// //     if (storedPurchased) {
// //       setPurchased(JSON.parse(storedPurchased));
// //     } else {
// //       localStorage.setItem("purchased", JSON.stringify([]));
// //     }
// //   }, []);

// //   useEffect(() => {
// //     const user = localStorage.getItem("user");
// //     if (user) {
// //       setData(JSON.parse(user));
// //     }
// //   }, []);

// //   const courses = [
// //     {
// //       id: 1,
// //       image:
// //         "https://i.postimg.cc/dV9W0ZVZ/Copy-of-Copy-of-Copy-of-SVG-in-HTML.png",
// //       name: "Front End",
// //       price: 90000,
// //       description: `Front-end Development involves creating the user interface using markup languages and other tools. It includes elements like buttons, texts, and alignments.`,
// //     },
// //     {
// //       id: 2,
// //       image: "https://i.postimg.cc/j53Q7ypC/backend-is-1200x808.webp",
// //       name: "Back End",
// //       price: 106000,
// //       description: `Backend Development involves the logic, database, and other operations running behind the scenes to efficiently manage web servers.`,
// //     },
// //     {
// //       id: 3,
// //       image: "https://i.postimg.cc/05674Kgd/th-28.jpg",
// //       name: "Full-stack",
// //       price: 150000,
// //       description: `Full Stack Developers can design complete web applications and websites, working on frontend, backend, database, and debugging.`,
// //     },
// //   ];

// //   const handlePurchase = async (course) => {
// //     const updatedPurchased = [...purchased, course];
// //     setPurchased(updatedPurchased);
// //     localStorage.setItem("purchased", JSON.stringify(updatedPurchased));

// //     const user = JSON.parse(localStorage.getItem("user"));
// //     if (!user) {
// //       console.error("No user data found in localStorage");
// //       return;
// //     }

// //     try {
// //       const response = await axios.post("https://backend-for-render-1.onrender.com/purchase", {
// //         Uid: user.Uid,
// //         id: course.id,
// //         name: course.name,
// //         description: course.description,
// //         price: course.price,
// //         image: course.image,
// //       });
// //       console.log("Response from server:", response.data);
// //     } catch (error) {
// //       console.error("Error during purchase:", error);
// //     }
// //   };

// //   return (
// //     <div
// //       className="bg-cover h-[230vh]"
// //       style={{
// //         backgroundImage:
// //           "url('https://i.postimg.cc/sD5w2jPW/istockphoto-1781685958-1024x1024.jpg')",
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //       }}
// //     >
// //       <div>
// //         <div className="flex h-[100px] border-b-2 items-center justify-around">
// //           <div>Company Name</div>
// //           <div className="rounded-[50px]">
// //             <input
// //               type="text"
// //               placeholder="Search courses....."
// //               className="h-[40px] w-[300px] rounded-[50px] pl-[20px] bg-[#d2d2e9]"
// //             />
// //           </div>
// //           <button
// //             className="h-[48px] w-[160px] rounded-[50px] bg-[#d2d2e9]"
// //             onClick={() => (window.location.href = "/purchased")}
// //           >
// //             Purchased
// //           </button>
// //           <div className="ml-[90px]">
// //             <button
// //               className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9]"
// //               onClick={() => (window.location.href = "/Signup")}
// //             >
// //               Signup
// //             </button>
// //             <button
// //               className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9] ml-[10px]"
// //               onClick={() => (window.location.href = "/Login")}
// //             >
// //               Login
// //             </button>
// //           </div>
// //         </div>

// //         {/* Include HoverComponent here */}
// //         <HoverComponent />

// //         <div className="flex flex-wrap justify-center">
// //           {courses.map((course) => {
// //             return (
// //               <div
// //                 key={course.id}
// //                 className="h-[540px] w-[300px] bg-[#ffffff] rounded-[30px] m-4 shadow-xl flex flex-col justify-between"
// //               >
// //                 <img
// //                   src={course.image}
// //                   alt={course.name}
// //                   className="h-[250px] w-full rounded-t-[30px] object-cover"
// //                 />
// //                 <div className="p-4">
// //                   <h3 className="text-xl font-bold">{course.name}</h3>
// //                   <p className="text-gray-700">{course.description}</p>
// //                   <p className="text-lg font-semibold">₹{course.price}</p>
// //                 </div>
// //                 <button
// //                   className="mt-2 ml-[40px] w-[70%] bg-[#1e90ff] text-white py-2 rounded"
// //                   onClick={() => handlePurchase(course)}
// //                 >
// //                   Purchase
// //                 </button>
// //                 <br />
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;

// //
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const HoverComponent = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="bg-gray-800 p-2"
//       style={{ padding: "1rem", border: "1px solid gray" }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div
//         style={{
//           display: isHovered ? "block" : "none",
//           marginTop: "0.5rem",
//           padding: "0.5rem",
//           border: "1px solid gray",
//         }}
//       >
//         <div className="list-none m-0 p-0 overflow-hidden">
//           <div className="inline-block relative group">
//             <div className="flex h-[100px] border-b-2 items-center justify-around">
//               <div className="ml-[90px]">
//                 <button
//                   className="h-[38px] w-[auto] pl-2 rounded-[10px] bg-[#d2d2e9] ml-[10px]"
//                   onClick={() => (window.location.href = "/Admin")}
//                 >
//                   Open Admin Panel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// function Dashboard() {
//   const [data, setData] = useState(null);
//   const [purchased, setPurchased] = useState([]);
//   const [products, setProducts] = useState([]); // Initialize as an empty array
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedPurchased = localStorage.getItem("purchased");
//     if (storedPurchased) {
//       setPurchased(JSON.parse(storedPurchased));
//     } else {
//       localStorage.setItem("purchased", JSON.stringify([]));
//     }
//   }, []);

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     if (user) {
//       setData(JSON.parse(user));
//     }
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://backend-for-render-1.onrender.com/all-products");
//         // Ensure response.data.products is an array
//         if (Array.isArray(response.data.products)) {
//           setProducts(response.data.products);
//         } else {
//           console.error("Invalid data format:", response.data.products);
//           setProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handlePurchase = async (course) => {
//     const updatedPurchased = [...purchased, course];
//     setPurchased(updatedPurchased);
//     localStorage.setItem("purchased", JSON.stringify(updatedPurchased));

//     const user1 = JSON.parse(localStorage.getItem("user1"));
//     if (!user1) {
//       console.error("No user data found in localStorage");
//       return;
//     }

//     try {
//       const response = await axios.post("https://backend-for-render-1.onrender.com/purchase", {
//         Uemail: user1.Uemail,
//         id: course.id,
//         name: course.name,
//         description: course.description,
//         price: course.price,
//         image: course.image,
//       });
//       console.log("Response from server:", response.data);
//     } catch (error) {
//       console.error("Error during purchase:", error);
//     }
//   };

//   return (
//     <div
//       className="bg-cover h-[230vh]"
//       style={{
//         backgroundImage:
//           "url('https://i.postimg.cc/sD5w2jPW/istockphoto-1781685958-1024x1024.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div>
//         <div className="flex h-[100px] border-b-2 items-center justify-around">
//           <div>Company Name</div>
//           <div className="rounded-[50px]">
//             <input
//               type="text"
//               placeholder="Search courses....."
//               className="h-[40px] w-[300px] rounded-[50px] pl-[20px] bg-[#d2d2e9]"
//             />
//           </div>
//           <button
//             className="h-[48px] w-[160px] rounded-[50px] bg-[#d2d2e9]"
//             onClick={() => (window.location.href = "/purchased")}
//           >
//             Purchased
//           </button>
//           <div className="ml-[90px]">
//             <button
//               className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9]"
//               onClick={() => (window.location.href = "/Signup")}
//             >
//               Signup
//             </button>
//             <button
//               className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9] ml-[10px]"
//               onClick={() => (window.location.href = "/Login")}
//             >
//               Login
//             </button>
//           </div>
//         </div>

//         <HoverComponent />

//         <div className="flex flex-wrap justify-center">
//           {loading ? (
//             <div className="text-center">Loading...</div>
//           ) : (
//             products.map((course) => (
//               <div
//                 key={course.id}
//                 className="h-[540px] w-[300px] bg-[#ffffff] rounded-[30px] m-4 shadow-xl flex flex-col justify-between"
//               >
//                 <img
//                   src={course.image}
//                   alt={course.name}
//                   className="h-[250px] w-full rounded-t-[30px] object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-bold">{course.name}</h3>
//                   <p className="text-gray-700">{course.description}</p>
//                   <p className="text-lg font-semibold">₹{course.price}</p>
//                 </div>
//                 <button
//                   className="mt-2 ml-[40px] w-[70%] bg-[#1e90ff] text-white py-2 rounded"
//                   onClick={() => handlePurchase(course)}
//                 >
//                   Purchase
//                 </button>
//                 <br />
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React, { useEffect, useState } from "react";
import axios from "axios";

const HoverComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-800 p-2"
      style={{ padding: "1rem", border: "1px solid gray" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          display: isHovered ? "block" : "none",
          marginTop: "0.5rem",
          padding: "0.5rem",
          border: "1px solid gray",
        }}
      >
        <div className="list-none m-0 p-0 overflow-hidden">
          <div className="inline-block relative group">
            <div className="flex h-[100px] border-b-2 items-center justify-around">
              <div className="ml-[90px]">
                <button
                  className="h-[38px] w-[auto] pl-2 rounded-[10px] bg-[#d2d2e9] ml-[10px]"
                  onClick={() => (window.location.href = "/Admin")}
                >
                  Open Admin Panel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Dashboard() {
  const [data, setData] = useState(null);
  const [purchased, setPurchased] = useState([]);
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedPurchased = localStorage.getItem("purchased");
    if (storedPurchased) {
      setPurchased(JSON.parse(storedPurchased));
    } else {
      localStorage.setItem("purchased", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setData(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://backend-for-render-1.onrender.com/all-products"
        );
        setProducts(response.data.products); // Directly set products
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handlePurchase = async (course) => {
    const updatedPurchased = [...purchased, course];
    setPurchased(updatedPurchased);
    localStorage.setItem("purchased", JSON.stringify(updatedPurchased));

    const user1 = JSON.parse(localStorage.getItem("user1"));
    if (!user1) {
      console.error("No user data found in localStorage");
      return;
    }

    try {
      const response = await axios.post(
        "https://backend-for-render-1.onrender.com/purchase",
        {
          Uemail: user1.Uemail,
          id: course.id,
          name: course.name,
          description: course.description,
          price: course.price,
          image: course.image,
        }
      );
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error during purchase:", error);
    }
  };

  return (
    <div
      className="bg-cover h-[230vh]"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/sD5w2jPW/istockphoto-1781685958-1024x1024.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className="flex h-[100px] border-b-2 items-center justify-around">
          <div>Company Name</div>
          <div className="rounded-[50px]">
            <input
              type="text"
              placeholder="Search courses....."
              className="h-[40px] w-[300px] rounded-[50px] pl-[20px] bg-[#d2d2e9]"
            />
          </div>
          <button
            className="h-[48px] w-[160px] rounded-[50px] bg-[#d2d2e9]"
            onClick={() => (window.location.href = "/purchased")}
          >
            Purchased
          </button>
          <div className="ml-[90px]">
            <button
              className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9]"
              onClick={() => (window.location.href = "/Signup")}
            >
              Signup
            </button>
            <button
              className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9] ml-[10px]"
              onClick={() => (window.location.href = "/Login")}
            >
              Login
            </button>
          </div>
        </div>

        <HoverComponent />

        <div className="flex flex-wrap justify-center">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            products.map((course, index) => (
              <div
                key={`${course.id}-${index}`} // Unique key using id and index
                className="h-[540px] w-[300px] bg-[#ffffff] rounded-[30px] m-4 shadow-xl flex flex-col justify-between"
              >
                <img
                  src={course.image}
                  alt={course.name}
                  className="h-[250px] w-full rounded-t-[30px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{course.name}</h3>
                  <p className="text-gray-700">{course.description}</p>
                  <p className="text-lg font-semibold">₹{course.price}</p>
                </div>
                <button
                  className="mt-2 ml-[40px] w-[70%] bg-[#1e90ff] text-white py-2 rounded"
                  onClick={() => handlePurchase(course)}
                >
                  Purchase
                </button>
                <br />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
