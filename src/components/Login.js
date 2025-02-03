// rafce - react arrow function component export

import React from 'react'
import { useState } from 'react';
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm]= useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div className=''>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg" alt="" />
      </div>
      <form className= "absolute w-3/12 right-0 my-36 left-0 p-12 mx-auto rounded-lg bg-black text-white bg-opacity-80" action="">
        <h1 className='text-3xl font-bold py-2'>{isSignInForm?"Sign In":"Sign Up"}</h1>
{!isSignInForm && (
        <input type="text" placeholder='Enter Your Name' className='p-4 my-4 w-full  rounded-lg bg-slate-600' />
)

}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full  rounded-lg bg-slate-600' />
        <input type="text" placeholder='Password' className='p-4 my-4 w-full   rounded-lg bg-slate-600' />
        <button className='p-4 my-6 w-full bg-red-800  rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p> {isSignInForm?"New to Netflix?":"Already a User?"} <span className='font-semibold cursor-pointer underline' onClick={toggleSignInForm}>{isSignInForm?"Sign Up":"Sign In"} Now</span> </p>
      </form>
    </div>
  )
}

export default Login
 