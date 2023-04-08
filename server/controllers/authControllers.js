const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const axios = require('axios')
const crypto = require('crypto')
const passwordReset = require('../utils/passwordReset')


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
      const validationCode =  await crypto.randomBytes(32)
      const  emailValidationCode = validationCode.toString('hex')

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
    const { googleAccessToken } = req.body

    const getGoogleAccount = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        "Authorization": `Bearer ${googleAccessToken}`
      }
    })    

    if(!getGoogleAccount) {
      res.status(404).json({message: "Google user does not exist."})
    } 
    const email = getGoogleAccount.data.email
    console.log(getGoogleAccount.data.email)

    const user = await User.findOne({ email })

    if( !user ) {
      res.status(404).json({message: "User does not exist in Data base"})
    } else {
      res.status(200).json({
        _id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        token: generateToken(user._id)
      })
    }
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

const pwReset = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { email } = req.body
  const user = await User.findOne({ email }) 

  if(!user) return res
    .status(404)
    .json({ message: "No user with this email exists.", status: "error"})

  const token =  await crypto.randomBytes(32)

  if(!token) return res
    .status(500).json({
      message: "An error occured with randombypes, please try again later.",
      status: "error",
    })

  const tokenToHex = token.toString("hex")

  user.resetToken = tokenToHex
  user.tokenExpiration = Date.now() + 18000000

  try {
    const saveToken = await user.save() 
    const link = `${process.env.BASE_URL}/password-reset/${user._id}/${tokenToHex}`
    await passwordReset(user.email, "Password reset", link)
    
    return res.status(200).json({
      message: "Add your client url that handles reset password.",
      data: {
        resetToken: saveToken.resetToken,
        tokenExpiration: saveToken.tokenExpiration,
      },
      status: "success",
    })
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: `An error occured while saving token -> ${err}`
    })
  }
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '10d'
  })
}

module.exports = {
  registerUser,
  loginUser,
  pwReset,
  // getUser,
}