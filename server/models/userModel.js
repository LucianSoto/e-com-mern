const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    user_name: {
      type: String,
      required: [ true, 'Please add name.'],
    },
    email: {
      type: String,
      required: [ true, 'Please add Email.'],
    },
    password: {
      type: String,
      required: [ true, 'Please add password.'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema)