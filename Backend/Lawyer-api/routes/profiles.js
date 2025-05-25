const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const LawyerProfile = require("../models/LawyerProfile");

router.post("/", authMiddleware, async (req, res) => {
  const { name, specialization, bio } = req.body;
  try {
    let profile = await LawyerProfile.findOne({ user: req.user.userId });
    if (profile) {
      return res.status(400).json({
        message:
          "Profile already exists. You can update your existing profile.",
      });
    }

    if (!name || !specialization) {
      return res
        .status(400)
        .json({ message: "Name and specialization are required" });
    }

    profile = new LawyerProfile({
      user: req.user.userId,
      name,
      specialization,
      bio,
    });
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    console.error("Profile creation error:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const profiles = await LawyerProfile.find().populate(
      "user",
      "username email"
    );
    res.json(profiles);
  } catch (err) {
    console.error("Get profiles error:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const profile = await LawyerProfile.findOne({ user: req.user.userId });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (err) {
    console.error("Get profile error:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
});

router.put("/me", authMiddleware, async (req, res) => {
  const { name, specialization, bio } = req.body;
  try {
    let profile = await LawyerProfile.findOne({ user: req.user.userId });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    profile.name = name || profile.name;
    profile.specialization = specialization || profile.specialization;
    profile.bio = bio || profile.bio;

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error("Update profile error:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
});

module.exports = router;
