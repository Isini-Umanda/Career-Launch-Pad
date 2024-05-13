const express = require('express')
//const Course = require('../models/courseModel')
const { 
    createCourse,
    getCourses,
    getCourse,
    updateCourse,
    deleteCourse
 } = require('../controllers/courseController')

const router = express.Router()

//GEt all Cources
router.get('/', getCourses)

//GEt a single Cource
router.get('/:id', getCourse) 

//POST a new Cource
router.post('/', createCourse)

//DELETE a Cource
router.delete('/:id', deleteCourse)

//UPDATE a Cource
router.patch('/:id', updateCourse)


module.exports = router