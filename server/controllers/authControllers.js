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

  const userExists = await User.findOne({email})
  if(userExists){
    res.status(400)
    throw new Error('User already exists!')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    first_name,
    last_name,
    email,
    password: hashedPassword,
  })

  if(user) {
    res.status(201).json({
      _id: user.id,
      first_name: user.first_name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data.')
  }
  
  return res.status(200).json({
    user_name: first_name + ' ' + last_name
  })
})

module.exports = {
  registerUser,
}