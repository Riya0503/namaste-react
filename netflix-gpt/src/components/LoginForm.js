// import Link from 'br'
import React, { useState } from 'react'

const LoginForm = () => {
    const [signUpForm, setSignUpForm] = useState(true);
    const toggleSignForm = () => {
        setSignUpForm(!signUpForm)
    }
  return (
    <div className='absolute w-[50%] h-[50%] translate-x-[50%] translate-y-[50%] '>
        <form className='flex  flex-col bg-black/80 z-10 p-16'>
            <label className='text-3xl text-white pb-6'>{signUpForm ? 'Sign Up' : 'Log In'}</label>
            {
                signUpForm && 
                <input type='text' placeholder='Full Name' className='p-2 m-2 my-4 rounded-sm bg-gray-700/90 font-white'/>
            }
            <input type='text' placeholder='Email address' className='p-2 m-2 my-4 rounded-sm bg-gray-700/90 font-white'/>
            <input type='text' placeholder='password' className='p-2 m-2 my-4  rounded-sm bg-gray-700/90'/>
            <button className='p-2 m-2 my-4  bg-red-600 text-white rounded-sm'>{signUpForm ? 'Sign Up' : 'Log In'}</button>
            <span className='text-white underline cursor-pointer' onClick={toggleSignForm}>{!signUpForm ? 'New to Netflix? Sign up now' : "Already Registered, Log In" }</span>
        </form>
    </div>
  )
}

export default LoginForm