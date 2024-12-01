import { useEffect, useState } from 'react';
import { useCoursesContext } from '../hooks/useCoursesContext';
import { useAuthContext } from '../hooks/useAuthContext';

// Components
import CourseDetails from '../components/CourseDetails';
import CourseForm from '../components/CourseForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function UniversityDashboard() {
    const [activePath, setActivePath] = useState('universities');
    const { courses, dispatch } = useCoursesContext();
    const { user } = useAuthContext();
    const [selectedCourse, setSelectedCourse] = useState(null); // State for the selected course

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/courses/user', {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                },
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_COURSES', payload: json });
            }
        };

        if (user) {
            fetchCourses();
        }
    }, [dispatch, user]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar activePath={activePath} onNavClick={setActivePath} />
            <div className="flex-grow grid grid-cols-4 gap-8 p-8">
                {courses &&
                    courses.map((course) => (
                        <div
                            key={course._id}
                            onClick={() => setSelectedCourse(course)} // Select the course on click
                        >
                            <CourseDetails course={course} />
                        </div>
                    ))}
            </div>
            {/* Single instance of CourseForm */}
            <CourseForm
                selectedCourse={selectedCourse}
                setSelectedCourse={setSelectedCourse}
            />
            <Footer />
        </div>
    );
}
