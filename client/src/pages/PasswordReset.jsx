import React, {useEffect, useState, useEffect } from 'react'
import { Formik , Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { passwordReset } from '../features/auth/authSlice'
// import  and create dispatch

function PasswordReset() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id, token } = useParams()
  const [pw1, setPw1] = useState('')
  const [pw2, setPw2] = useState('')
  // check if token is expired

  

  const updatePassword = (e, pw1, pw2) => {
    e.preventDefault()
    if(pw1 === pw2) {
      const data = {
        password: pw1,
        id: id,
        token: token,
      }
      dispatch(passwordReset(data))
    } else {
      alert('Passwords do not match, try again!')
    }
  }

  return (
    <div className='h-screen flex flex-col items-center w-full'>
      <p className='text-3xl my-10'>Password Reset</p>
      <form action="submit" onSubmit={(e)=> updatePassword(e, pw1, pw2)}
        className="w-full h-full p-4 "
      >
        <p className="text-xl">New Password</p>
        <input type="password" 
          className="text-xl rounded mb-4" 
          onChange={(e)=> setPw1(e.target.value)}
        />
        <p className="text-xl">Confirm Password</p>
        <input type="password" 
          className="text-xl rounded mb-4" 
          onChange={(e)=> setPw2(e.target.value)}
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
