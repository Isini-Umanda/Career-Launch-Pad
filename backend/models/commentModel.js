const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    courseComment: {
        type: String,
        required: true
    }
})
