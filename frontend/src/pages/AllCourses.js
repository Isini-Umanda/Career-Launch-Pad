import { useEffect, useState } from 'react';
import AllCourseDetails from '../components/AllCourseDetails'; // Assuming you have this component to display individual course details
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CoursesPage = () => {
    const [activePath, setActivePath] = useState('courses');
    const [coursesBySubjectArea, setCoursesBySubjectArea] = useState({});
    const [filteredCourses, setFilteredCourses] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch all courses on component mount
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/courses/all'); // Call the new endpoint to get all courses
                if (!response.ok) {
                    throw new Error('Failed to fetch courses.');
                }
                const json = await response.json();
                categorizeCoursesBySubjectArea(json);
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
        setFilteredCourses(categorizedCourses);
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value ? e.target.value.toLowerCase() : '';
        setSearchQuery(query);

        if (query === '') {
            setFilteredCourses(coursesBySubjectArea);
        } else {
            const filtered = {};
            Object.keys(coursesBySubjectArea).forEach((subjectArea) => {
                const filteredCourses = coursesBySubjectArea[subjectArea].filter((course) =>
                    (course.name && course.name.toLowerCase().includes(query)) ||
                    course.subject_area.toLowerCase().includes(query) ||
                    (course.description && course.description.toLowerCase().includes(query))
                );
                if (filteredCourses.length > 0) {
                    filtered[subjectArea] = filteredCourses;
                }
            });
            setFilteredCourses(filtered);
        }
    };

    if (loading) {
        return <div className="text-center p-8">Loading courses...</div>;
    }

    if (error) {
        return <div className="text-center p-8 text-red-500">{error}</div>;
    }

    return (
        <div>
            <Navbar activePath={activePath} onNavClick={setActivePath} />
            <div className="p-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-teal-600">Available Courses by Subject Area</h1>

                {/* Search Input */}
                <div className="mb-8 text-center">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search for courses..."
                        className="p-2 border border-gray-300 rounded w-full max-w-md"
                    />
                </div>

                {/* Iterate over each subject area to render its courses */}
                {Object.keys(filteredCourses).length > 0 ? (
                    Object.keys(filteredCourses).map((subjectArea) => (
                        <div key={subjectArea} className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">{subjectArea}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredCourses[subjectArea].map((course) => (
                                    <AllCourseDetails key={course._id} course={course} />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">No courses found.</div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default CoursesPage;
