const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const stuSchema = new Schema({
    stu_fname:{
        type:String,
        required:true
    },
    stu_lname:{
        type:String,
        required:true
    },
    stu_email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
    },
    stu_password:{
        type:String,
        required:true,
        trim:true,
        minlength: 8
    },
    al_stream:{
        type:String,
        required:true
    },
    z_score:{
        type:Number,
        required:true,
        decimal:true,
        precision:5,
        scale:4
    },
    desire_subject:{
        type:String,
        required:true
    }
})

//static signup method
stuSchema.statics.signup = async function (stu_fname, stu_lname, stu_email, stu_password, al_stream, z_score, desire_subject) {

    //validation
    if(!stu_fname || !stu_lname || !stu_email || !stu_password || !al_stream || !z_score || !desire_subject){
        throw Error('All fields must be required')
    }
    if(!validator.isEmail(stu_email)) {
        throw Error('Invalid email')
    }
    if(!validator.isStrongPassword(stu_password)) {
        throw Error('Password must be at least 8 characters long')
    }
    if(!validator.isDecimal(z_score)) {
        throw Error('Invalid z-score')
    }

    const exists = await this.findOne({ stu_email })

    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(stu_password, salt)

    const student = await this.create({stu_fname, stu_lname, stu_email, stu_password: hash, al_stream, z_score, desire_subject})

    return  student
}

//static login method
stuSchema.statics.login = async function (stu_email, stu_password) {

    if(!stu_email || !stu_password){
        throw Error('All fields must be required')
    }

    const user = await this.findOne({ stu_email })

    if(!user){
        throw Error('Invalid Login Credentials')
    }

    const match = await bcrypt.compare(stu_password, user.stu_password)

    if(!match) {
        throw Error('Invalid Login Credentials')
    }

    return user
}

module.exports = mongoose.model('student', stuSchema)
