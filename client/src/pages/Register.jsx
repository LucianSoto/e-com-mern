import React, { useState } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  return (
    <form>
      <div className="">Become A Member to Recieve Exclusive Offers</div>
      <label htmlFor="First Name">First Name</label>
      <input type="text" 
        className=''
        placeholder='John'
        
      />
    </form>
  )
}

export default Register
