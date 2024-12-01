import { useCoursesContext } from "../hooks/useCoursesContext"
import { useAuthContext } from "../hooks/useAuthContext"

// date fns
//import { formatDistance, subDays } from "date-fns"
import { format } from 'date-fns'

const CourseDetails = ({ course }) => {
    const { dispatch } = useCoursesContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if(!user) {
            return
        }
        const response = await fetch('/api/courses/' + course._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
              }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_COURSE', payload: json})
        }
    }

    return (
        <div className="hover:bg-sky-50 p-8 bg-zinc-50 rounded-md overflow-hidden shadow-lg">
            <h1 className="text-sky-700 text-2xl p-4 truncate">{course.course_name}</h1>
            <p className="break-words truncate text-sm mt-4 justify-evenly">{course.course_description}</p>
            <p className=" text-sm">{course.subject_area}</p>
            <p className=" text-sm">{course.course_fee}</p>
            <p className=" text-sm">{course.required_result}</p>
            <p className="text-xs text-gray-400">{format(new Date(course.createdAt), 'yyyy-MM-dd')}</p>
            <div className="py-5">
              <span onClick={handleClick}className="mt-4 px-4 py-2 bg-red-300 text-white rounded hover:bg-red-600">Delete</span>
            </div>
        </div>
    )
}

export default CourseDetails