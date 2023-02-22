import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cross as Hamburger } from 'hamburger-react'
import { BiSearchAlt } from 'react-icons/bi'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='flex '>
      <div className="text-3xl">LOGO</div>
      <Hamburger 
        toggled={isOpen} 
        toggle={setOpen}
        className="text-black"
        color="#000"
      />
      <div id="dropdown">
        <div className="flex ">
          <div className="">Men</div>
          <div className="">Women</div>
          <div className="">Kids</div>
          <div className="">Sale</div>
        </div>
        {/*  use a search icon */}
        <div id="search" className='flex'>
          <input 
            className='border-2 border-indigo-600 rounded-full pl-[10px]'
            type="text" 
            placeholder='Search...'
          />
          <BiSearchAlt className='mt-1 -ml-7 text-3xl text-gray-500'/>
        </div>
        <Link to="/log_in">Log In</Link>
        <Link to="/register" >Sign Up</Link>
      </div>
    </nav>
  )
}

export default Nav
