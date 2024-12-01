const express = require('express')
//const Course = require('../models/courseModel')
const { 
    createCourse,
    getCourses,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse,
    getCoursesBySubjectArea
 } = require('../controllers/courseController')
 const requireCourseAuth = require('../middleware/requireCourseAuth')
 const requireStudentAuth = require('../middleware/requireStudentAuth');

const router = express.Router()

router.get('/all', getAllCourses)

router.use(requireCourseAuth)

//GEt all Cources
router.get('/user', getCourses)

//GEt a single Cource
router.get('/:id', getCourse) 

//POST a new Cource
router.post('/', createCourse)

//DELETE a Cource
router.delete('/:id', deleteCourse)

//UPDATE a Cource
router.patch('/:id', updateCourse)

router.get('/subject/:subject_area', requireStudentAuth, getCoursesBySubjectArea);



module.exports = router