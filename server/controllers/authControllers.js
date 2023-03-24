const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const axios = require('axios')

const registerUser = asyncHandler(async (req,res) => {
  if(req.body.googleAccessToken){
    const { googleAccessToken } = req.body

    const getGoogleAccount = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        "Authorization": `Bearer ${googleAccessToken}`
      }
    })

    const first_name = getGoogleAccount.data.given_name
    const last_name = getGoogleAccount.data.family_name
    const email = getGoogleAccount.data.email

    const userExists = await User.findOne({email})

    if(userExists)
      return res.status(400).json({message: "user already exists!"})

    const user = await User.create({
      verified: "true", // for auth instead of pw
      email, 
      first_name, 
      last_name
    })

    if(user) {
      res.status(201).json({
        _id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        token: generateToken(user._id)
      })
    } else {
      res.status(400)
      throw new Error("Invalid user data.")
    }
  } else {
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
        last_name: user.last_name,
        email: user.email,
        token: generateToken(user._id)
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data.')
    }
  }
})

const loginUser = asyncHandler(async (req,res) => {
  if(req.body.googleAccessToken) {

  } else {
    const { email, password } = req.body
  
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(201).json({
        _id: user.id,
          first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        token: generateToken(user._id)
      })
    }
  }
})

// const getUser = asyncHandler(async (req, res) => {
//   console.log('empty function')
// })

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '10d'
  })
}

module.exports = {
  registerUser,
  loginUser,
  // getUser,
}