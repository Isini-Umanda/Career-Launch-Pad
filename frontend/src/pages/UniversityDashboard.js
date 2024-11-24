//import React from 'react'
import { useEffect } from 'react'
import { useCoursesContext } from '../hooks/useCoursesContext'
import React, { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext'


//components
import CourseDetails from '../components/CourseDetails'
import CourseForm from '../components/CourseForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

export default function UniversityDashboard() {
    const { courses, dispatch } = useCoursesContext()
    const [activePath, setActivePath] = useState('universities');
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/courses', {
              headers: {
                'Authorization': `Bearer ${user.token}`
              }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_COURSES', payload: json})
            }

            console.log(json)
        }

        if(user) {
          fetchCourses()
        }
    }, [dispatch, user])
    
  return (
    <div>
      <Navbar
        activePath={activePath} 
        onNavClick={setActivePath}/>
      <div className="grid grid-cols-4 gap-8 p-8">
        {courses && courses.map((course) => (
            <CourseDetails key={course._id} course={course} />
        ))}
      </div>
      <CourseForm/>
      <Footer/>
    </div>
  )
}
