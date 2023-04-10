import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(()=> {
      navigate('/')
    }, 1500)
  })
  return (
   <div className='h-screen z-100'>
      <div className="modal">
        <p className="text-3xl text-red-600 font-bold mt-20">LINK EXPIRED.  REDIRECTING...</p>
      </div>
    </div>
  )
}

export default PageNotFound
