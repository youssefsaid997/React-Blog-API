const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlenght: [50, "the maximum length for the title is 50 character"],
  },
  text: {
    type: String,
    trim: true,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Post", PostSchema);
