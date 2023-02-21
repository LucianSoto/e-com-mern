import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div>
      <div className="logo">LOGO</div>
      {/*  use a search icon */}
      <input 
        className=''
        type="text" 
        placeholder='Search...'
      />
      <div className="">
        <div className="">Men</div>
        <div className="">Women</div>
        <div className="">Kids</div>
        <div className="">Sale</div>
      </div>
    </div>
  )
}

export default Nav
