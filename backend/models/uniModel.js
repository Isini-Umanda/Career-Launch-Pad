const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const uniSchema = new Schema({
    uni_name: {
        type: String,
        required: true,
        unique: true
    },
    uni_description: {
        type: String,
        required: true
    },
    uni_email: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        lowercase:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
    },
    uni_password: {
        type: String,
        required: true,
        trim:true,
        minlength: 8,

    },
    uni_hotline: {
        type: String,
        required: true
    },
    uni_link: {
        type: String,
        required: true
    },
    uni_address: {
        type: String,
        required: true
        },
    uni_logo: {
       // type: String,
        //required: true
    }
})

//static signup method
uniSchema.statics.signup = async function (uni_name, uni_description, uni_email, uni_password, uni_hotline, uni_link, uni_address) {

    //validation
    if(!uni_name || !uni_description || !uni_email || !uni_password || !uni_hotline || !uni_link || !uni_address){
        throw Error('All fields must be required')
    }
    if(!validator.isEmail(uni_email)) {
        throw Error('Invalid email')
    }
    if(!validator.isStrongPassword(uni_password)) {
        throw Error('Password must be at least 8 characters long, and must contain at least one')
    }
    if(!validator.isMobilePhone(uni_hotline)) {
        throw Error('Invalid phone number')
    }
    if(!validator.isURL(uni_link)){
        throw Error('Invalid URL')
    }

    const exists = await this.findOne({ uni_email })

    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(uni_password, salt)

    const uniUser = await this.create({uni_name, uni_description, uni_email, uni_password: hash, uni_hotline, uni_link, uni_address})

    return  uniUser
}

//static login method
uniSchema.statics.login = async function (uni_email, uni_password) {

    if(!uni_email || !uni_password){
        throw Error('All fields must be required')
    }

    const user = await this.findOne({ uni_email })

    if(!user){
        throw Error('Invalid Login Credentials')
    }

    const match = await bcrypt.compare(uni_password, user.uni_password)

    if(!match) {
        throw Error('Invalid Login Credentials')
    }

    return user
}

module.exports = mongoose.model('uniUser', uniSchema)