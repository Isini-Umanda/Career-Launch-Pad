import React from 'react'
import { useEffect } from 'react'
import { useCoursesContext } from '../hooks/useCoursesContext'

//components
import CourseDetails from '../components/CourseDetails'
import CourseForm from '../components/CourseForm'
import Navbar from '../components/Navbar'

export default function UniversityDashboard() {
    const { courses, dispatch } = useCoursesContext()

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/courses')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_COURSES', payload: json})
            }

            console.log(json)
        }

        fetchCourses()
    }, [])
    
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 gap-8 p-8">
        {courses && courses.map((course) => (
            <CourseDetails key={course._id} course={course} />
        ))}
      </div>
      <CourseForm/>
    </div>
  )
}
