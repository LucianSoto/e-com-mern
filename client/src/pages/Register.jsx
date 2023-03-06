import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'

const Register = () => {
  const label = 'text-xl text-black'
  const inputStyles = 'w-4/5 h-8 rounded-md text-2xl mb-8 text-black'
  const inputErrorStyles = 'w-4/5 h-8 rounded-md text-2xl mb-8 text-black border-2 border-red-400'

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
  })

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password1: false,
    password2: false,
  })
  const { firstName, lastName, email, password1, password2 } = formData
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  const updateForm = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.name]: e.value
    }))
  }

  const submitForm = (e, form) => {
    e.preventDefault()
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const validateEmail = email.match(regex)
    const errorsList = []
    if(!firstName) {errorsList.push(firstName)}
    if(!lastName) {errorsList.push(lastName)}
    if(!email) {errorsList.push(email)}
    if(!password1) {errorsList.push(password1)}
    if(!password2) {errorsList.push(password2)}

    

    // if(!firstName) { 
    //   // alert('Enter your first name.')
    //   // setErrors(prev => ({
    //   //   ...prev,
    //   //   firstName: true
    //   // }))
    //   errors.push(firstName)
    // } else if ()

    // for(let i = 5; i > 0; i--) {
      
    // }
    


    // errors.map( // loop through and change errors to )

    // }
    // if(password1 !== password2) {
    //   alert('Passwords do not match!')
    //   setErrors(prev => ({
    //     ...prev,
    //     password2: true,
    //   }))
    // }
console.log(errorsList)
  }

  // console.log(errors)

  return (
    <form className='flex flex-col items-center text-gray-100 h-screen' onSubmit={(e)=> submitForm(e, formData)}>
      <p className="text-4xl mt-12">Create an Accout</p>
      <p className="text-2xl my-6">Become A Member to Recieve Exclusive Offers</p>
      <label className={label}htmlFor="First Name">First Name</label>
      {/* <br /> */}
      <input type="text" 
        name="firstName"
        className={ errors.firstName ?  
          // console.log('') : console.log('no error')
          inputErrorStyles : inputStyles   
        }
        placeholder='John'
        onChange={(e)=> updateForm(e.target)}
        // ref={nameRef}
      />
      {/* {errors.firstname && 
        <div className="">error first name</div>
      } */}
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
