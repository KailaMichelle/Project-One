const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    user: {
      ref: "User",
    },
  },
  { timestamps: true }
);

const Resource = mongoose.model("Resource", UserSchema);

module.exports = Resource;
