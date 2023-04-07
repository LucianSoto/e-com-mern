import React from 'react'

function ForgotPw() {

  const submitForgotPW = () => {
    
  }

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <form action="submit" onSubmit={submitForgotPW} 
        className="w-full"
      >
        <p 
          className="text-4xl mb-16"
        >Reset Password</p>
        <p 
          className="text-2xl mb-4"
        >Email</p>
        <input type="email" 
          className='mb-12 rounded text-2xl w-3/4'
        />
        <br />
        <button
          className='text-2xl rounded text-gray-100 uppercase 
          bg-gradient-to-b from-emerald-600 to-green-500
          px-8 py-2 w-1/2 tracking-widest font-bold
          '
        >Reset</button>
      </form>
    </div>
  )
}

export default ForgotPw
