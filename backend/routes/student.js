const express = require('express')

//controller functions
const {stuLogin, stuSignup} = require('../controllers/studentController')


const router = express.Router()

//login route
router.post('/stuLogin', stuLogin)

//signup route
router.post('/stuSignup', stuSignup)

module.exports = router
