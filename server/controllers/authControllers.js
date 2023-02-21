const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const registerUser = asyncHandler(async (req,res) => {
  const { username, email, password } = req.body

  return username
})

module.exports = {
  registerUser,
}