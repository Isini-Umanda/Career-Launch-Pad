import React from 'react'
import Navbar from '../components/Navbar'
import image from '../images/image1.jpg';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img className="h-full w-full object-cover" src={image} alt="Winding mountain road" />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-bold uppercase text-green-800 lg:text-4xl">Discover Your Passion</h2>
            <p className="mt-4">
              Discover your ideal career path and find the perfect courses to match your goals and ake our career quiz, get personalized course recommendations, and connect with universities.
            </p>
            <div className="mt-8">
              <a href="/StuSignup"
                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 px-6 bg-emerald-600 rounded-xl text-white font-bold text-lg'>Try Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
