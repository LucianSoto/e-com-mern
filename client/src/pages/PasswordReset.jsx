import React, {useEffect, useState} from 'react'
// import  and create dispatch

function PasswordReset() {
  const updatePassword = () => {

  }

  return (
    <div className='h-screen flex flex-col items-center w-full'>
      <p className='text-3xl my-10'>Password Reset</p>
      <form action="submit" onSubmit={()=> updatePassword()}
        className="w-full h-full p-4 "
      >
        <p className="text-xl">New Password</p>
        <input type="text" 
          className="text-xl rounded mb-4" 
        />
        <p className="text-xl">Confirm Password</p>
        <input type="text" 
          className="text-xl rounded mb-4" 
        />
        <br />
        <button
          className='text-2xl px-4 py-2 bg-green-500 rounded-md mt-8'
        >Submit</button>
      </form>
    </div>
  )
}

export default PasswordReset
