const express = require('express')
const router = express.Router()

const {
  registerUser,
  loginUser,
  getUser,
} = require('../controllers/authControllers')

//const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('log_in', loginUser)
router.get('/get_user', getUser)

module.exports = router

// set up middleware to work along with routes to check auth