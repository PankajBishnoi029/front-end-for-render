// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Purchase() {
//   const [courses, setCourses] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const result = await axios.post(
//         "https://backend-for-render-1.onrender.com/purchased-courses",
//         {
//           Uemail: JSON.parse(localStorage.getItem("user")).Uemail,
//         }
//       );
//       setCourses(result.data.courses);
//     }
//     fetchData();
//   }, []);

//   const [markdone, setmark] = useState([]);

//   const mark = async (course) => {
//     const updatedmark = [...markdone, course]; // Corrected to properly merge arrays
//     setmark(updatedmark); // Corrected setState function name
//     localStorage.setItem("markdone", JSON.stringify(updatedmark)); // Updated key name

//     const user = JSON.parse(localStorage.getItem("user"));
//     if (!user) {
//       console.error("No user data found in localStorage");
//       return;
//     }

//     try {
//       const response = await axios.post("https://backend-for-render-1.onrender.com/Mark", {
//         Uemail: user.id, // Ensure user ID is sent
//         Mdone: course, // Ensure correct course is sent
//       });
//       console.log("Response from server:", response.data);
//     } catch (error) {
//       console.error("Error during mark:", error);
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
//       <div className="flex h-[100px] border-b-2 items-center justify-around">
//         <div>Company Name</div>
//         <div className="rounded-[50px]">
//           <input
//             type="text"
//             placeholder="Search courses....."
//             className="h-[40px] w-[300px] rounded-[50px] pl-[20px] bg-[#d2d2e9]"
//           />
//         </div>
//         <button
//           className="h-[48px] w-[160px] rounded-[50px] bg-[#d2d2e9]"
//           onClick={() => (window.location.href = "/")}
//         >
//           Dashboard
//         </button>
//         <div className="ml-[90px]">
//           <button
//             className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9]"
//             onClick={() => (window.location.href = "/Signup")}
//           >
//             Signup
//           </button>
//           <button
//             className="h-[38px] w-[120px] rounded-[10px] bg-[#d2d2e9] ml-[10px]"
//             onClick={() => (window.location.href = "/Login")}
//           >
//             Login
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-center mt-4">
//         {courses.map((course, index) => {
//           return (
//             <div
//               key={index}
//               className="h-[540px] w-[300px] bg-[#ffffff] rounded-[30px] m-4 shadow-xl flex flex-col justify-between"
//             >
//               <img
//                 src={course.image}
//                 alt={course.name}
//                 className="h-[250px] w-full rounded-t-[30px] object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold">{course.name}</h3>
//                 <p className="text-gray-700">{course.description}</p>
//                 <p className="text-lg font-semibold">₹{course.price}</p>
//               </div>

//               <button
//                 className="mt-2 ml-[40px] w-[70%] bg-[#1e90ff] text-white py-2 rounded"
//                 onClick={() => mark(course)}
//               >
//                 markdone
//               </button>
//               <br />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Purchase;

import axios from "axios";
import React, { useEffect, useState } from "react";

function Purchase() {
  const [courses, setCourses] = useState([]);
  const [markdone, setMarkdone] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const user1 = JSON.parse(localStorage.getItem("user1"));
      if (user1 && user1.Uemail) {
        try {
          const result = await axios.post(
            "https://backend-for-render-1.onrender.com/purchased-courses",
            { Uemail: user1.Uemail }
          );
          setCourses(result.data.courses);
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      } else {
        console.error("No user data found in localStorage");
      }
    }
    fetchData();
  }, []);

  const mark = async (course) => {
    const updatedMarkdone = [...markdone, course];
    setMarkdone(updatedMarkdone);
    localStorage.setItem("markdone", JSON.stringify(updatedMarkdone));

    const user = JSON.parse(localStorage.getItem("user1"));
    if (!user) {
      console.error("No user data found in localStorage");
      return;
    }

    try {
      const response = await axios.post(
        "https://backend-for-render-1.onrender.com/Mark",
        {
          Uemail: user.Uemail,
          Mdone: course,
        }
      );
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error during mark:", error);
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
          onClick={() => (window.location.href = "/")}
        >
          Dashboard
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

      <div className="flex flex-wrap justify-center mt-4">
        {courses.map((course, index) => (
          <div
            key={index}
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
              onClick={() => mark(course.name)}
            >
              Mark Done
            </button>

            <br />
          </div>
        ))}
      </div>
      <button
        className="mt-2 ml-[40px] w-[70%] bg-[#1e90ff] text-white py-2 rounded"
        onClick={() => (window.location.href = "/Mark")}
      >
        Go to Marked Done
      </button>
    </div>
  );
}

export default Purchase;
