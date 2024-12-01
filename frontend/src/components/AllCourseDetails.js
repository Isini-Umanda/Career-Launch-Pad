import React, { useState } from 'react';
import { format } from 'date-fns';

const CourseDetails = ({ course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Course Card */}
      <div
        className="hover:bg-sky-50 p-8 bg-zinc-50 rounded-lg overflow-hidden shadow-md cursor-pointer"
        onClick={openModal}
      >
        <h1 className="text-sky-700 text-2xl p-4 truncate">{course.course_name}</h1>
        <p className="break-words text-ellipsis text-sm mt-4 justify-evenly truncate">
          {course.course_description}
        </p>

        <p className="text-sm">{course.required_result}</p>
        <p className="text-xs text-gray-400">
          {format(new Date(course.createdAt), 'yyyy-MM-dd')}
        </p>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-teal-500 text-center">{course.course_name}</h2>
            <p className="mb-4 text-gray-700">{course.course_description}</p>
            <p className="mb-2 text-gray-700">Fee: {course.course_fee}</p>
            <p className="mb-2 text-gray-700">Required Result: {course.required_result}</p>
            <p className="text-xs text-gray-400 mb-4">
              Created on: {format(new Date(course.createdAt), 'yyyy-MM-dd')}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
