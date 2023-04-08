import React, {useEffect, useState} from 'react'
// import  and create dispatch

function PasswordReset() {
  const updatePassword = () => {
    
  }

  return (
    <div>
      <p className='text-3xl'>Password Reset</p>
      <form action="submit" onSubmit={()=> updatePassword()}>
        <p className="text-xl">New Password</p>
        <input type="text" 
          className="" 
        />
        <p className="text-xl">Confirm Password</p>
        <input type="text" 
          className="" 
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default PasswordReset
