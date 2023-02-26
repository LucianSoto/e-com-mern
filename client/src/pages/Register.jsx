import React, { useState } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
  })

  const label = 'text-2xl'
  const inputStyles = 'w-4/5 h-8 rounded-md text-2xl '

  const updateForm = (e) => {
    console.log(e.name)
    setFormData(prev => ({
      ...prev,
      [e.name]: e.value
    }))
  }

  const submitForm = (e, form) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <form className='flex flex-col items-center' onSubmit={(e)=> submitForm(e, formData)}>
      <p className="text-4xl mt-12">Create an Accout</p>
      <p className="text-2xl my-6">Become A Member to Recieve Exclusive Offers</p>
      <label className={label}htmlFor="First Name">First Name</label>
      {/* <br /> */}
      <input type="text" 
        name="firstName"
        className={inputStyles}
        placeholder='John'
        onChange={(e)=> updateForm(e.target)}
        
      />
      <label className={label}htmlFor="Last Name">Last Name</label>
      {/* <br /> */}
      <input type="text" 
        name="lastName"
        className={inputStyles}
        placeholder='Sno'
        onChange={(e)=> updateForm(e.target)}
      />
      <label className={label}htmlFor="Email">Email</label>
      <input type="email" 
        name="email"
        className={inputStyles}
        placeholder='YourEmail@something.com'
        onChange={(e)=> updateForm(e.target)}
      />
      <label className={label}htmlFor="Password">Password</label>
      <input type="password" 
        name="password1"
        className={inputStyles}
        placeholder='Password'
        onChange={(e)=> updateForm(e.target)}
      />
      <label className={label}htmlFor="Confirm Password">Password</label>
      <input type="password"
        name="password2" 
        className={inputStyles}
        placeholder='Confirm Password'
        onChange={(e)=> updateForm(e.target)}
      />
      <button className="mt-8 bg-yellow-400 w-4/5 py-1 rounded-md text-2xl">Submit</button>
    </form>
  )
}

export default Register
