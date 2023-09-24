const mongoose = require("mongoose");

const postModel = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    body: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports.Post = mongoose.model("post", postModel);
