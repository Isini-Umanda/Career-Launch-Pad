const mongoose = require('mongoose')
const { validate } = require('./courseModel')

const Schema = mongoose.Schema

const uniSchema = new Schema({
    uni_name: {
        type: String,
        required: true
    },
    uni_description: {
        type: String,
        required: true
    },
    uni_email: {
        type: String,
        required: true,
        unique: true
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