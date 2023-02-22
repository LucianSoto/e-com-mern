import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex '>
      <div className="logo">LOGO</div>
      <div className="flex ">
        <div className="">Men</div>
        <div className="">Women</div>
        <div className="">Kids</div>
        <div className="">Sale</div>
      </div>
      {/*  use a search icon */}
      <input 
        className=''
        type="text" 
        placeholder='Search...'
      />
      <Link to="/log_in">Log In</Link>
      <Link to="/register" >Sign Up</Link>
    </nav>
  )
}

export default Nav
