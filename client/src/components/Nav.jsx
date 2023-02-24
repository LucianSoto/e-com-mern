import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cross as Hamburger } from 'hamburger-react'
import { BiSearchAlt } from 'react-icons/bi'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='flex-col w-full'>
      <div id="logo-burder-cont" className='flex w-full justify-between'>
        <div className="text-3xl ">L C</div>
        <div id="search" className='flex'>
          <input 
            className='border-b pl-[10px] w-3/4'
            type="text" 
            placeholder='Search...'
          />
          <BiSearchAlt className='mt-1 -ml-7 text-3xl text-gray-500'/>
        </div>
        <Hamburger 
          toggled={isOpen} 
          toggle={setOpen}
          className="text-black"
          color="#000"
        />
      </div>
      { isOpen &&
        <div id="dropdown" className='flex-col hidden'>
          <Link to="/log_in">Log In</Link>
          <br />
          <Link to="/register" >Sign Up</Link>
            <div className="">Men</div>
            <div className="">Women</div>
            <div className="">Kids</div>
            <div className="">Sale</div>
        </div>
      }
    </nav>
  )
}

export default Nav
