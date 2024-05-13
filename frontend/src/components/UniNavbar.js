import React from 'react'
import { Link } from 'react-router-dom'

export default function UniNavbar() {
  return (
    <header>
       <nav className='hover:bg-sky-50 bg-zinc-50 flex items-center justify-between flex-wrap p-6 shadow-sm'>
        <Link to={'/'}>
        <div className='flex'>
            <h1 className='font-sans font-extrabold tracking-wide text-cyan-700 text-2xl hover:text-cyan-500'>
              <a href='/'>CareerLaunchPad</a>
            </h1>
          </div>
        </Link>
       </nav>
    </header>
  )
}
