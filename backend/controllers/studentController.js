const student = require('../models/studentModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// login user
const stuLogin = async (req, res) => {
    const {stu_email, stu_password} = req.body

    try{
        const user = await student.login(stu_email, stu_password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({stu_email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//signup user
const stuSignup = async (req, res) => {
    const {stu_fname, stu_lname, stu_email, stu_password, al_stream, z_score, desire_subject} = req.body

    try{
        const user = await student.signup(stu_fname, stu_lname, stu_email, stu_password, al_stream, z_score, desire_subject)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({stu_email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {stuLogin, stuSignup}