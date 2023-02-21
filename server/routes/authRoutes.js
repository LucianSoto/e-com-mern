const express = require('express')
const router = express.Router()

const {
  registerUser,
} = require('../controllers/authControllers')

//const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)

module.exports = router

// set up middleware to work along with routes to check auth