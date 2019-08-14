const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  postedBy: {
    type: String,
    required: true
  },
  photo: {
    data: Buffer,
    contentType: String
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date
});

module.exports = mongoose.model("Blog", blogSchema);
