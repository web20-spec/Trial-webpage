import { Checkbox } from '@mui/material'
import React from 'react'

function Apply() {
  return (
    <div className="bg-[url('https://admissions.uol.edu.pk/static/media/uol-admissions-portal.19a2c5a892ead43a32dc.webp')] min-h-screen min-w-full bg-no-repeat bg-cover bg-fixed relative"
    >

      <div className='pt-15 pl-12'>

      <img className='h-18' src="https://www.accessed.pk/_next/image?url=%2FUniversities%2FUOL.png&w=640&q=75" alt="logo" />
      </div>

      <div className='bg-indigo-50 w-95 h-110 absolute top-30 right-10 pt-10 pl-10 pr-5 '>

        <div className='flex mb-4'>
        <p className='text-4xl text-slate-500 font-bold mt-5'>UOL</p>
        <div className='w-1 h-20 border-r-4 border-gray-400 rounded-2xl ml-4 mr-4'></div>
        <p className='text-indigo-900 text-sm pr-50 mt-2'>Online Admission System</p>
        </div>

        {/* <div className='flex-row'> */}
          <p className='text-gray-500 font-semibold'>Login</p>
        {/* </div> */}

        <div className='mt-4'>
          <input className='border-slate-300 border rounded-2xl pl-2 pt-0.5 pb-0.5 mb-1.5 w-full ' type="text" placeholder='Enter your email here' ></input>

          <input className='border-gray-300 border rounded-2xl pl-2 pt-0.5 pb-0.5 mt-1.5 w-full ' type="text" placeholder='Enter your password here' ></input>
        </div>

        <div className='text-blue-600 font-semibold text-lg flex flex-row-reverse mt-2'>
          Forgot Password?
        </div>

        <div className='flex items-center justify-start mt-1'>
          <Checkbox sx={{color:'lightgray'}} className='text-gray-300 '></Checkbox>
          <p className='text-slate-500 text-lg font-medium'>Remember me</p>
        </div>

        <div className='mt-2'>
          <button className='border-black border-2 bg-slate-950 text-white text-sm rounded-2xl w-full h-9 p-0.5'>Sign In</button>
        </div>

        <div className='flex justify-items-start mt-3'>
          <p className='text-slate-500 text-lg font-medium'>You don't have an account?</p>
          <p className='text-blue-600 font-semibold text-lg ml-1'>Sign Up</p>
        </div>

      </div>

    </div>
  )
}

export default Apply