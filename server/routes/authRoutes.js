const express = require('express')
const router = express.Router()

const {
  registerUser,
  loginUser,
  pwReset,
  // getUser,
} = require('../controllers/authControllers')

//const {protect} = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/log_in', loginUser)
router.post('/password_reset', pwReset)
// router.get('/get_user', protect getUser)  

module.exports = router

// set up middleware to work along with routes to check auth