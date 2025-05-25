import React from "react";
import { useNavigate } from "react-router-dom";

function UpdateProfile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLoggedIn = Boolean(token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  return (
    <div>
      <h2>Update Profile</h2>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UpdateProfile;
