const API_ROOT = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const register = async (userData) => {
  const response = await fetch(`${API_ROOT}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Registration failed");
  return data;
};

export const login = async (credentials) => {
  const response = await fetch(`${API_ROOT}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Login failed");
  return data;
};

export const createProfile = async (profileData, token) => {
  const response = await fetch(`${API_ROOT}/profiles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Profile creation failed");
  return data;
};

export const getProfiles = async () => {
  const response = await fetch(`${API_ROOT}/profiles`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Failed to fetch profiles");
  return data;
};

export const getProfile = async (token) => {
  const response = await fetch(`${API_ROOT}/profiles/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Failed to fetch profile");
  return data;
};

export const updateProfile = async (profileData, token) => {
  const response = await fetch(`${API_ROOT}/profiles/me`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Profile update failed");
  return data;
};
