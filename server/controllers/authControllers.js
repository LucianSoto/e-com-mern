const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const registerUser = asyncHandler(async (req,res) => {
  const { user_name, email, password } = req.body

  if(!user_name, !email, !password){
    res.status(400)
    throw new Error('Field is empty')
  }
  
  return user_name
})

module.exports = {
  registerUser,
}