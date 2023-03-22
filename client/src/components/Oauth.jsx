import React from 'react'
import GoogleIcon from '../assets/images/google-icon.png'


function Oauth({register}, googleRegister) {
  return (
    
    <div 
      className="flex flex-col h-1/5 w-full items-center mb-0"
      onClick={()=> googleRegister()}
    >
    <img src={GoogleIcon} alt="" 
      className='h-2/5  mb-6'
    />
    <p className='text-xl'>{register ? 'Register with Google' : 'Login with Google'}</p>
   </div>
  )
}

export default Oauth
