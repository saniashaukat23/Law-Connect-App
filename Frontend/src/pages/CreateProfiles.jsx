import React, { useState } from "react";

function CreateProfile() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    area: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile created:", formData);
    alert("Profile submitted!");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Area of Law:</label>
          <select
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select area</option>
            <option value="Family Law">Family Law</option>
            <option value="Criminal Law">Criminal Law</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="form-control"
            rows={4}
          />
        </div>
        <div className="mb-3">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Profile
        </button>
      </form>
    </div>
  );
}

export default CreateProfile;
