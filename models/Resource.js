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
  },
  { timestamps: true }
);
//!was userSchema
const Resource = mongoose.model("Resource", ResourceSchema);

module.exports = Resource;
