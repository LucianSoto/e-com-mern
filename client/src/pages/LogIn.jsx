import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'


const LogIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const label = 'text-xl text-black'
  const inputStyles = 'w-4/5 h-8 rounded-md text-2xl mb-1 text-black'
  const inputErrorStyles = 'w-4/5 h-8 rounded-md text-2xl mb-8 text-black border-2 border-red-400'
  const errorStyles = 'text-red-500 bolder-2 mb-2'
  
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  // console.log(user, isSuccess)

  useEffect(()=> {
    if(isError) {
      console.log(message)
      alert(message)
    }
    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  },[user, isError, isSuccess, message, navigate, dispatch])
  
  const registerSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Min 2 characters')
      .max(50, 'Max 50 characters.')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Min 2 characters')
      .max(50, 'Max 50 characters.')
      .required('Required'),
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string()
      .min(8, '8 characters minimum')
      .test("isValidPass", " is not valid", (value, context) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSymbole = /[!@#%&]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 3;
        const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
        conditions.forEach((condition) =>
          condition ? validConditions++ : null
        );
        if (validConditions >= numberOfMustBeValidConditions) {
          return true;
        }
        return false;
      }),
    password2: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
  })

  return (
    <div className='flex flex-col items-center text-gray-100 h-screen'>
      <p className="text-4xl mt-12">Create an Accout</p>
      <p className="text-2xl my-6">Become A Member to Recieve Exclusive Offers</p>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
            dispatch(login(values))
            setSubmitting(false);
        }}
      >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
        // onSubmit={(e)=> submitForm(e, values)} 
        /////// Must be formik <Form> element not regular <form> element
          <Form className='flex flex-col items-center w-full'>
            <label htmlFor="" className="">Email</label>
            <input
              className={inputStyles}              
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <label htmlFor="" className="">Password</label>
            <input
              className={inputStyles}              
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={!Formik.isValid ? "mt-8 bg-yellow-400 w-4/5 py-1 rounded-md text-2xl" : 'bg-yellow-200' }
            >
              Submit
            </button>
          </Form>
       )}
     </Formik>
    </div>
  )
}

export default LogIn
