const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    course_name:{
        type: String,
        required: true
    },
    course_description:{
        type: String,
        required: true
    },
    course_fee:{
        type: String,
        required: true
    },
    subject_area:{
        type: String,
        required: true
    },
    required_result:{
        type: String,
    },
    age_limit:{
        type: String,
    },
    published:{
        type: Boolean,
        default: true
    },
    course_image: {
        //type: String,
        //required: true
    }
    
},{ timestamps: true })

module.exports = mongoose.model('Course', courseSchema)