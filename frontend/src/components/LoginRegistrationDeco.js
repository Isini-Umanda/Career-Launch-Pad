import React from 'react'
//import { Link } from 'react-router-dom'

export default function LoginRegistrationDeco(){
    return (
        <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
        <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-500 animate-spin"/>
        <div className='h-1/6 text-5xl font-bold text-teal-700 absolute'><h1>CareerLaunchPad</h1></div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
        
      </div>
    )
}