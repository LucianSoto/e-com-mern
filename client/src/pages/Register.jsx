import React, { useState } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const label = 'text-2xl'

  const inputStyles = 'w-4/5 h-8 rounded-md text-2xl '

  return (
    <form className='flex flex-col items-center'>
      <p className="text-4xl mt-12">Create an Accout</p>
      <p className="text-2xl my-6">Become A Member to Recieve Exclusive Offers</p>
      <label className={label}htmlFor="First Name">First Name</label>
      {/* <br /> */}
      <input type="text" 
        className={inputStyles}
        placeholder='John'
        
      />
      <label className={label}htmlFor="Last Name">Last Name</label>
      {/* <br /> */}
      <input type="text" 
        className={inputStyles}
        placeholder='Sno'
      />
      <label className={label}htmlFor="Email">Email</label>
      <input type="email" 
        className={inputStyles}
        placeholder='YourEmail@something.com'
      />
      <label className={label}htmlFor="Password">Password</label>
      <input type="password" 
        className={inputStyles}
        placeholder='Password'
      />
      <label className={label}htmlFor="Confirm Password">Password</label>
      <input type="password" 
        className={inputStyles}
        placeholder='Confirm Password'
      />
      <button className="mt-8 bg-yellow-400 w-4/5 py-1 rounded-md text-2xl">Submit</button>
    </form>
  )
}

export default Register
