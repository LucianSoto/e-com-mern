const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const registerUser = asyncHandler(async (req,res) => {
  const { firstName, lastName, email, password } = req.body
  const first_name = firstName
  const last_name = lastName 

  if(!first_name, !last_name, !email, !password){
    res.status(400)
    throw new Error('Field is empty')
  }
  
  return res.status(200).json({
    user_name: first_name + ' ' + last_name
  })
})

module.exports = {
  registerUser,
}