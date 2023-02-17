import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div>
      <div className="promo-text">Get the presidentail treatment: Call 888-552-1105 for more details
      </div>
      <div className="mid-nav">
        <div className="logo">
          <img src="https://static.guitarcenter.com/img/brand/gc/cmn/svg-icon/gc-logo-white.svg?vId=7.2.49.1&cb=18" alt="" />
        </div>
      </div>
      <div className="lower-nav">
        <div className="low-nav-l">
          <img src="https://static.guitarcenter.com/img/brand/gc/cmn/svg-icon/my-store-black.svg?vId=7.2.49.1&cb=18" alt="" className="second-logo" />
          <div className="select-store">Select Store</div>
        </div>  
        <div className="low-nav-r">
          98121
          {/* get my location lol */}
        </div>
      </div>      
    </div>
  )
}

export default Nav
