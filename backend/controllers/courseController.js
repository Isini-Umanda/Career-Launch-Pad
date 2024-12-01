const Course = require('../models/courseModel')
const mongoose = require('mongoose')


//GEt all Cources for AllCourses page
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({}); // Fetch all courses
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
}

//GEt all Cources for university dashboard
const getCourses = async (req, res) => {
    const user_id = req.user._id
    const courses = await Course.find({user_id}).sort({createdAt: -1})

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

    let emptyFields = []

    if(!course_name) {
        emptyFields.push('Course Name')
    }
    if(!course_description) {
        emptyFields.push('Description')
    }
    if(!course_fee) {
        emptyFields.push('Course Fee')
    }
    if(!subject_area) {
        emptyFields.push('Subject Area')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    // add doc to db
    try {
        const user_id = req.user._id
        const course = await Course.create({course_name, course_description, course_fee, subject_area, required_result, age_limit, published, course_image, user_id})
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

// Get courses by subject area
const getCoursesBySubjectArea = async (req, res) => {
    const { subject_area } = req.params;

    try {
        const courses = await Course.find({ subject_area });
        console.log('Courses found:', courses); // Log courses found
        res.status(200).json(courses);
    } catch (error) {
        console.error('Error in getCoursesBySubjectArea:', error);
        res.status(500).json({ error: 'Failed to fetch courses.' });
    }
};




module.exports = {
    getAllCourses,
    createCourse,
    getCourses,
    getCourse,
    deleteCourse,
    updateCourse,
    getCoursesBySubjectArea
}