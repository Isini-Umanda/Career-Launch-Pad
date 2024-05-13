const Course = require('../models/courseModel')
const mongoose = require('mongoose')

//GEt all Cources
const getCourses = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: -1})

    res.status(200).json(courses)
}

//GEt a single Course
const getCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such course'}) 
    }

    const course = await Course.findById(id)

    if (!course) {
        return res.status(404).json({error: 'No such course'}) 
    }

    res.status(200).json(course)
}


//CREATE a new Course
const createCourse = async (req, res) => {
    const {course_name, course_description, course_fee, subject_area, required_result, age_limit, published, course_image} = req.body

    // add doc to db
    try {
        const course = await Course.create({course_name, course_description, course_fee, subject_area, required_result, age_limit, published, course_image})
        res.status(200).json(course)
    }catch (error) {
        res.status(400).json({error: error.message})
    }
}

//DELETE a Course
const deleteCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such course'}) 
    }

    const course = await Course.findOneAndDelete({_id: id})

    if (!course) {
        return res.status(400).json({error: 'No such course'}) 
    }

    res.status(200).json(course)
}

//UPDATE a Course
const updateCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such course'}) 
    }

    const course = await Course.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!course) {
        return res.status(400).json({error: 'No such course'}) 
    }

    res.status(200).json(course)
}

module.exports = {
    createCourse,
    getCourses,
    getCourse,
    deleteCourse,
    updateCourse
}