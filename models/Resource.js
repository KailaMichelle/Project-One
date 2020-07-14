const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
      required: false
    },
    link: {
      type: String
    },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource'
      }
    ]
  },
  { timestamps: true }
)

const Resource = mongoose.model('Resource', resourceSchema)

module.exports = Resource
