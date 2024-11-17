import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-white text-center">
      <div className="container pt-9">
        {/* Navigation links container */}
        <div className="mb-6 flex justify-center space-x-8">
          <a
            href="/"
            className="rounded-full bg-transparent p-3 font-medium leading-normal text-surface underline-transparent transition duration-150 ease-in-out hover:underline decoration-teal-400 focus:outline-none focus:ring-0"
            data-twe-ripple-init>
            Home
          </a>

          <a
            href="/Courses"
            className="rounded-full bg-transparent p-3 font-medium leading-normal text-surface underline-transparent transition duration-150 ease-in-out hover:underline decoration-teal-400 focus:outline-none focus:ring-0"
            data-twe-ripple-init>
            Courses
          </a>

          <a
            href="/StuLogin"
            className="rounded-full bg-transparent p-3 font-medium leading-normal text-surface underline-transparent transition duration-150 ease-in-out hover:underline decoration-teal-400 focus:outline-none focus:ring-0"
            data-twe-ripple-init>
            Quiz
          </a>

          <a
            href="/UniLogin"
            className="rounded-full bg-transparent p-3 font-medium leading-normal text-surface underline-transparent transition duration-150 ease-in-out hover:underline decoration-teal-400 focus:outline-none focus:ring-0"
            data-twe-ripple-init>
            University
          </a>
        </div>
      </div>

      {/* Copyright section */}
      <div className="w-full bg-emerald-800 p-4 text-center text-white">
        &copy; 2024 Copyright. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
