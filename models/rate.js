const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const rateSchema = new mongoose.Schema(
  {
    rate: {
      type: Number,
      required: true,
      min: [1, "Rate should be at least 1"],
      max: [5, "Rate should be at most 5"],
    },
    postid: {
      type: ObjectId,
      ref: "Post",
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);
module.exports = mongoose.model("Rate", rateSchema);
