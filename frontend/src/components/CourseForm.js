import { useState } from "react"
import { useCoursesContext } from '../hooks/useCoursesContext'

const CourseForm = () => {
    const { dispatch } = useCoursesContext()
    const [course_name, setCourse_name] = useState('')
    const [course_description, setCourse_description] = useState('')
    const [course_fee, setCourse_fee] = useState('')
    const [subject_area, setSubject_area] = useState('')
    const [required_result, setRequired_result] = useState('')
    const [age_limit, setAge_limit] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const course = {course_name, course_description, course_fee, subject_area, required_result, age_limit}

        const response = await fetch('/api/courses', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setCourse_name('')
            setCourse_description('')
            setCourse_fee('')
            setSubject_area('')
            setRequired_result('')
            setAge_limit('')
            setError(null)
            console.log('New Course Added', json)
            dispatch({type: 'CREATE_COURSE', payload: json})
        }
    }

    return (
        <div className=" bg-zinc-100 p-8 rounded-md overflow-hidden shadow-lg m-12 mx-96 hover:bg-indigo-100">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center font-sans text-2xl font-semibold">Add a New Course</h2>
                <div className="flex flex-wrap mx-3 mb-6 ">
                    <label className="block w-full px-3 mb-2 text-sm font-medium text-gray-700">Course Name:</label>
                    <input className="w-80 ml-10 h-6 text-sm"
                        type="text"
                        onChange={(e) => setCourse_name(e.target.value)}
                        value={course_name}
                    />

                    <label className="block w-full px-3 mb-2 text-sm font-medium text-gray-700">Description:</label>
                    <textarea className="w-80 h-12 ml-10 resize-none overflow-y-auto text-sm"
                        type="text"
                        onChange={(e) => setCourse_description(e.target.value)}
                        value={course_description}
                    />

                    <label className="block w-full px-3 mb-2 text-sm font-medium text-gray-700">Course Fee:</label>
                    <input className="w-80 ml-10 h-6 text-sm"
                        type="text"
                        onChange={(e) => setCourse_fee(e.target.value)}
                        value={course_fee}
                    />

                    <label className="block w-full px-3 mb-2 text-sm font-medium text-gray-700">Related Subject Area:</label>
                    <input className="w-80 ml-10 h-6 text-sm"
                        type="text"
                        onChange={(e) => setSubject_area(e.target.value)}
                        value={subject_area}
                    />

                    <label className="block w-full px-3 mb-2 text-sm font-medium text-gray-700">Required Result:</label>
                    <input className="w-80 ml-10 h-6 text-sm"
                        type="text"
                        onChange={(e) => setRequired_result(e.target.value)}
                        value={required_result}
                    />

                    <label className="block w-full px-3 mb-2 text-sm font-medium text-gray-700">Age Limit:</label>
                    <input className="w-80 ml-10 h-6 text-sm"
                        type="text"
                        onChange={(e) => setAge_limit(e.target.value)}
                        value={age_limit}
                    />
                </div>
                <dIv className="pt-2">
                       <button className="bg-cyan-600 rounded-full hover:bg-cyan-800 justify-start py-2 px-3 text-xs font-bold cursor-pointer tracking-wider">Add Course</button>
                    </dIv>
                    <div className="p-4">
                        {error && <div className="p-2 bg-red-100 rounded-md border-red-200 shadow-lg">{ error }</div>}
                    </div>
            </form>
        </div>
    )
}

export default CourseForm