import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  console.log(user)

  useEffect(()=> {
    if(isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/log_in')
    } else {
      // dispatch(reset())
    }
  },[user, isError, isSuccess, message])

  return (
    <>
      <Hero/>
      <p className="">Welcome {user.first_name}</p>
      
      {/* 
        <Sale />
        <Featured />
      */}
    </>
  )
}

export default Home
