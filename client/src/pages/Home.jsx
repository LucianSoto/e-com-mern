import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset } from '../features/auth/authSlice'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  console.log(user, isLoading, isError, isSuccess, message)

  useEffect(()=> {
    if(isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/log_in')
    } 
    // else if (user === null) {
    //   navigate('/log_in')
    // } 
    else {
      dispatch(reset())
    }
  },[user, isError, isSuccess, message, navigate, dispatch])

  return (
    <>
      <Hero/>
      <p className="">Welcome { user? user.first_name : null}</p>

      {/* 
        <Sale />
        <Featured />
      */}
    </>
  )
}

export default Home
