const uniUser = require('../models/uniModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}


// login user
const uniLoginUser = async (req, res) => {
    const {uni_email, uni_password} = req.body

    try{
        const user = await uniUser.login(uni_email, uni_password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({uni_email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//signup user
const uniSignupUser = async (req, res) => {
    const {uni_name, uni_description, uni_email, uni_password, uni_hotline, uni_link, uni_address} = req.body

    try{
        const user = await uniUser.signup(uni_name, uni_description, uni_email, uni_password, uni_hotline, uni_link, uni_address)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({uni_email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {uniLoginUser, uniSignupUser}