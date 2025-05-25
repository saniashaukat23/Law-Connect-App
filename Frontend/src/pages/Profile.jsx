import { useState, useEffect } from "react";
import { createProfile, getProfile, updateProfile } from "../api";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    bio: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setLoading(true);
      getProfile(token)
        .then((data) => {
          setProfile(data);
          setFormData({
            name: data.name || "",
            specialization: data.specialization || "",
            bio: data.bio || "",
          });
        })
        .catch((err) => {
          if (err.message === "Profile not found") {
            setProfile({});
          } else {
            setError(err.message);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      if (profile && Object.keys(profile).length) {
        const updatedProfile = await updateProfile(formData, token);
        setProfile(updatedProfile);
        setSuccess("Profile updated successfully");
      } else {
        const newProfile = await createProfile(formData, token);
        setProfile(newProfile);
        setSuccess("Profile created successfully");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="text-center mt-8">
        Please log in to view or create your profile.
      </div>
    );
  }

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">
        {profile && Object.keys(profile).length
          ? "Edit Profile"
          : "Create Profile"}
      </h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2 border rounded"
            required
            disabled={loading}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Specialization</label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            placeholder="Specialization (e.g., Criminal Law)"
            className="w-full p-2 border rounded"
            required
            disabled={loading}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself"
            className="w-full p-2 border rounded"
            rows="4"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
          disabled={loading}
        >
          {loading
            ? "Processing..."
            : profile && Object.keys(profile).length
            ? "Update Profile"
            : "Create Profile"}
        </button>
      </form>
    </div>
  );
}

export default Profile;
