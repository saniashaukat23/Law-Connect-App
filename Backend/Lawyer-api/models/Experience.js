const mongoose = require("mongoose");
const ExperienceSchema = new mongoose.Schema(
  {
    profileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LawyerProfile",
      required: true,
    },
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Experience", ExperienceSchema);
