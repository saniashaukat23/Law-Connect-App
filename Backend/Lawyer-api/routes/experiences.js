const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Exp = require("../models/Experience");
const Profile = require("../models/LawyerProfile");

router.post("/:profileId", auth, async (req, res) => {
  const profile = await Profile.findById(req.params.profileId);
  if (!profile || profile.userId.toString() !== req.user.userId)
    return res.status(403).json({ msg: "Not allowed" });

  const experience = new Exp({ profileId: profile.id, ...req.body });
  await experience.save();
  res.json(experience);
});

module.exports = router;
