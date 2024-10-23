import React, { useState } from "react";
import axios from "axios";

function Updatepass() {
  const [uid, setUid] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backend-for-render-1.onrender.com/update-password",
        {
          Uid: uid,
          oldPassword,
          newPassword,
        }
      );

      if (response.data.message === "Password updated successfully") {
        setMessage("Password updated successfully");
      } else {
        setMessage(response.data.message || "Failed to update password");
      }
    } catch (error) {
      setMessage("Error updating password");
    }
  };

  return (
    <div>
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="uid">User ID:</label>
          <input
            type="text"
            id="uid"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="oldPassword">Old Password:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Updatepass;
