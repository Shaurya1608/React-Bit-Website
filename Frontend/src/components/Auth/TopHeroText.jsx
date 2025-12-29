import React from 'react'
import { NavLink } from 'react-router-dom'

const TopHeroText = () => {
  return (
    <div className=' h-40 w-120 flex flex-col justify-end items-center py-6 px-6 relative '>
      <div className='text-center space-y-2'>
        <NavLink
          to="/"
          className="flex items-baseline gap-1 font-bold text-4xl md:text-5xl mb-2"
        >
          <span className=" text-white font-serif tracking-wide text-3xl absolute left-36 top-2">Thrift</span>
          <span className="text-white font-serif tracking-wide text-3xl ml-2 absolute left-60 top-2">Store</span>
        </NavLink>

        <p className="text-lg  text-gray-400 font-light">
          Explore more. Experience life.
        </p>

        <div className="flex gap-4 mt-6">
          <NavLink
            to="/signup"
            className="px-20 py-2 border-2 border-gray-600 rounded-lg text-gray-200 font-medium  transition-all duration-200 text-sm"
          >
            Sign Up
          </NavLink>
          
          <NavLink
            to="/login"
            className="px-20 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-all duration-200 text-sm shadow-lg"
          >
            Log In
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default TopHeroText
