const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Rev = require("../models/Review");

router.post("/:profileId", auth, async (req, res) => {
  if (req.user.role !== "client")
    return res.status(403).json({ msg: "Clients only" });

  const review = new Rev({
    profileId: req.params.profileId,
    clientId: req.user.userId,
    rating: req.body.rating,
    comment: req.body.comment,
  });
  await review.save();
  res.json(review);
});

module.exports = router;
