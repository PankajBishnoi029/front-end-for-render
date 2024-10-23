import axios from "axios";
import { useEffect, useState } from "react";

function Mark() {
  const [markdone, setMarkdone] = useState([]);

  useEffect(() => {
    const fetchMarkdone = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.Uemail) {
        console.error("No user data or email found in localStorage");
        return;
      }

      try {
        const response = await axios.post(
          "https://backend-for-render-1.onrender.com/Markdone",
          {
            Uemail: user.Uemail, // Fetch markdone data using Uemail
          }
        );
        setMarkdone(response.data.markdone || []); // Set fetched data to state
      } catch (error) {
        console.error("Error fetching markdone data:", error);
      }
    };

    fetchMarkdone();
  }, []);

  const handleRedirect = () => {
    window.location.href = "/"; // Redirect to the desired page
  };

  return (
    <div>
      <h1>Markdone Courses</h1>
      {markdone.length === 0 ? (
        <p>No courses marked as done yet.</p>
      ) : (
        <ul>
          {markdone.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      )}
      <button onClick={handleRedirect}>Go to Another Page</button>
    </div>
  );
}

export default Mark;
