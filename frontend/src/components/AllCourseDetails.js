import React from 'react';

// date fns
import { format } from 'date-fns'

const CourseDetails = ({ course }) => {

    return (
        <div className="hover:bg-sky-50 p-6 bg-zinc-50 rounded-lg overflow-hidden shadow-md">
            <h1 className="text-sky-700 text-2xl p-4">{course.course_name}</h1>
            <p className="break-words truncate-lines-3 text-sm mt-4 justify-evenly">{course.course_description}</p>
            <p className=" text-sm">{course.course_fee}</p>
            <p className=" text-sm">{course.required_result}</p>
            <p className="text-xs text-gray-400">{format(new Date(course.createdAt), 'yyyy-MM-dd')}</p>
        </div>
    )
}

export default CourseDetails;
