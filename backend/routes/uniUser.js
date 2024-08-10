const express = require('express')

//controller functions
const { uniLoginUser, uniSignupUser } = require('../controllers/uniUserController')


const router = express.Router()

//login route
router.post('/uniLogin', uniLoginUser)

//signup route
router.post('/uniSignup', uniSignupUser)

module.exports = router
