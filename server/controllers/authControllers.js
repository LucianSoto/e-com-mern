const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const registerUser = asyncHandler(async (req,res) => {
  const { first_name, last_name, email, password } = req.body
  console.log(first_name)

  if(!first_name, last_name, !email, !password){
    res.status(400)
    throw new Error('Field is empty')
  }
  
  return user_name
})

module.exports = {
  registerUser,
}