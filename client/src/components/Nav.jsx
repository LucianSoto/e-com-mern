import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cross as Hamburger } from 'hamburger-react'
import { BiSearchAlt } from 'react-icons/bi'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='flex-col w-full'>
      <div id="logo-burder-cont" className='flex w-full justify-between px-1 justify-center items-center'>
        <Link className='text-3xl text-gray-100 bold flex ml-2 mt-1 items-center rounded-full p-2'
        to="/"
        >LC</Link>
        <div id="search" className='flex justify-center items-center  ml-3'>
          <input 
            className='border-b-2 w-3/4 bg-transparent h-3/4 pb-1 mt-2 text-xl text-gray-100 font-bold'
            type="text" 
            placeholder='Search...'
          />
          <BiSearchAlt className='mt-1 -ml-2 text-3xl text-gray-100'/>
        </div>
        <Hamburger 
          toggled={isOpen} 
          toggle={setOpen}
          color="whitesmoke"
        />
      </div>
      {
        isOpen &&
        <div id="dropdown" className='relative mt-1 flex-col transition-all ease-out duration-300 h-3/4 bg-gray-100'>
          <Link onClick={()=> setOpen(!isOpen)} to="/log_in" className='flex h-16 justify-center items-center '
          >Log In</Link>
          <Link onClick={()=> setOpen(!isOpen)} to="/register" className='flex h-16 justify-center items-center'
          >Sign Up</Link>
            <div onClick={()=> setOpen(!isOpen)} className="h-16 flex items-center justify-center">Men</div>
            <div onClick={()=> setOpen(!isOpen)} className="h-16 flex items-center justify-center">Women</div>
            <div onClick={()=> setOpen(!isOpen)} className="h-16 flex items-center justify-center">Kids</div>
            <div onClick={()=> setOpen(!isOpen)} className="h-16 flex items-center justify-center">Sale</div>
        </div>
      }
    </nav>
  )
}

export default Nav
