const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = newSchema({
  userId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "user",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  }
})

module.exports = mongoose.model("token", tokenSchema)