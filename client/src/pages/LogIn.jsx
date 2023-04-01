import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset, loginGoogle } from '../features/auth/authSlice'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate, Link } from 'react-router-dom'
import GoogleIcon from '../assets/images/google-icon.png'
import { useGoogleLogin } from '@react-oauth/google'


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

  console.log(user, isSuccess)

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
  
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string().required('Required')
  })

  const handleGoogleSignupSuccess = (tokenResponse) =>{
    console.log('handleing google success')
    const accessToken = tokenResponse.access_token
    dispatch(loginGoogle(accessToken))
  }

  const login = useGoogleLogin({ onSuccess: handleGoogleSignupSuccess })

  return (
    <div className='flex flex-col items-center text-gray-100 h-screen'>
      <p className="text-4xl my-12">Log In</p>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
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
          <Form className='flex flex-col items-center w-full mb-20'>
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
     <div 
      className="flex flex-col h-1/5 w-full items-center mb-0"
      onClick={()=> login()}
      >
      <img src={GoogleIcon} alt="" 
        className='h-2/5  mb-6'
      />
      <p className='text-xl'>Register with Google</p>
     </div>
    <p className="">or</p>
     <Link to='/register'>Register</Link>
    </div>
  )
}

export default LogIn
