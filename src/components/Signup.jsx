import React from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'
import Button from './Button'
import Meta from './Meta'

function Signup() {
  return (
<>
    <Meta
title = 'Signup - Create Account'
description='Create account to register'
canonical='http://localhost:5174/signup'
robots = 'index, follow'
keywords="university, education, signup, programs, login"

/>

     <div className="flex items-center justify-center my-20">
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>

                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/apply"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                <form>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"    
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        />
                        <Button type="submit" className="w-full cursor-pointer hover:bg-blue-700">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

    </div>
    </>
  )
}

export default Signup