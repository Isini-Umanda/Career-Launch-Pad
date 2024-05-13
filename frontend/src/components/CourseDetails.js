import { useCoursesContext } from "../hooks/useCoursesContext"

const CourseDetails = ({ course }) => {
    const { dispatch } = useCoursesContext()

    const handleClick = async () => {
        const response = await fetch('/api/courses/' + course._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_COURSE', payload: json})
        }
    }

    return (
        <div className="hover:bg-sky-50 p-8 bg-zinc-50 rounded-md overflow-hidden shadow-lg">
            <h1 className="text-sky-700 text-2xl p-4">{course.course_name}</h1>
            <p className="break-words truncate-lines-3 text-sm mt-4 justify-evenly">{course.course_description}</p>
            <p className=" text-sm">{course.subject_area}</p>
            <p className=" text-sm">{course.course_fee}</p>
            <p className=" text-sm">{course.required_result}</p>
            <p className="text-xs text-gray-400">{course.createdAt}</p>
            <div className="p-5">
              <span onClick={handleClick}className="bg-red-200 rounded-full hover:bg-red-400 justify-start py-2 px-3 text-xs font-bold cursor-pointer tracking-wider">Delete</span>
            </div>
        </div>
    )
}

export default CourseDetails