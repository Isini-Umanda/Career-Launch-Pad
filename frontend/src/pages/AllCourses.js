import { useEffect, useState } from 'react';
import AllCourseDetails from '../components/AllCourseDetails'; // Assuming you have this component to display individual course details

const CoursesPage = () => {
    const [coursesBySubjectArea, setCoursesBySubjectArea] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch all courses on component mount
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/courses/all'); // Call the new endpoint to get all courses
                const json = await response.json();

                if (response.ok) {
                    categorizeCoursesBySubjectArea(json);
                } else {
                    setError('Failed to fetch courses.');
                }
            } catch (error) {
                setError('Failed to fetch courses. Please try again later.');
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    // Function to categorize courses by subject area
    const categorizeCoursesBySubjectArea = (courses) => {
        const categorizedCourses = {};

        courses.forEach((course) => {
            if (!categorizedCourses[course.subject_area]) {
                categorizedCourses[course.subject_area] = [];
            }
            categorizedCourses[course.subject_area].push(course);
        });

        setCoursesBySubjectArea(categorizedCourses);
    };

    if (loading) {
        return <div className="text-center p-8">Loading courses...</div>;
    }

    if (error) {
        return <div className="text-center p-8 text-red-500">{error}</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Available Courses by Subject Area</h1>

            {/* Iterate over each subject area to render its courses */}
            {Object.keys(coursesBySubjectArea).map((subjectArea) => (
                <div key={subjectArea} className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">{subjectArea}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coursesBySubjectArea[subjectArea].map((course) => (
                            <AllCourseDetails key={course._id} course={course} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CoursesPage;
