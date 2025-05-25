const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    console.log("Register request:", { name, email });

    if (!name || !email || !password) {
      console.log("Missing fields");
      return res.status(400).json({ msg: "All fields are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already registered");
      return res.status(400).json({ msg: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    console.log("Salt generated");
    const hash = await bcrypt.hash(password, salt);
    console.log("Password hashed");

    const user = new User({ name, email, password: hash, role: "lawyer" });
    await user.save();
    console.log("User saved");

    const payload = { userId: user.id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("Token signed");

    res.json({ token });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const payload = { userId: user.id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
