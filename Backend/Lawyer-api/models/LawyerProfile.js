const mongoose = require("mongoose");

const lawyerProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    bio: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LawyerProfile", lawyerProfileSchema);
