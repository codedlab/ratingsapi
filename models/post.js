const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
    minLength: [20, "Post should contain at least 100 characters"],
  },
  rate: {
    type: Number,
    required: false,
    min: [1, "Rate should be at least 1"],
    max: [5, "Rate should be at most 5"],
  },
});

module.exports = mongoose.model("Post", postSchema);
