import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { forgotPW } from '../features/auth/authSlice'
import axios from 'axios'

function ForgotPw() {
  const [email, setEmail] = useState('') 
  const dispatch = useDispatch()
  const { isSuccess, isError, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    console.log(isSuccess, isError, message)
  },[isSuccess, isError, message])

  const submitForgotPW = async (e, email) => {
    e.preventDefault()
    console.log(email)
    // dispatch(forgotPW(email))
    const res = await axios.post(
      `http://localhost:9000/userAuth/forgot_password`, 
      {email: email}
      )
    
      console.log(res)
  }

// MAKE POPUP "check email   / user does not exist"

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <form action="submit" onSubmit={(e)=> submitForgotPW(e, email)} 
        className="w-full"
      >
        <p 
          className="text-4xl mb-16"
        >Reset Password</p>
        <p 
          className="text-2xl mb-4"
        >Email</p>
        <input type="email" 
          className='mb-12 rounded text-2xl w-3/5 py-1'
          onChange={(e)=> setEmail(e.target.value)}
        />
        <br />
        <button
          className='text-2xl rounded text-gray-100 uppercase 
          px-8 py-2 w-1/2 tracking-widest font-bold
          bg-green-500
          '
          >Reset</button>
      </form>
    </div>
  )
}

export default ForgotPw

// bg-gradient-to-b from-emerald-600 to-green-500