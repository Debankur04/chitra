"use client"
import React,{useState} from 'react'
import { assets } from '../../../public/assets'
import Image from "next/image";


const page = () => {
  const [state, setstate] = useState('Login')
  
    return (
      <div className='absolute top-0 left-0 right-0 bottom-0 z-2 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
                  <form action="" className='relative bg-white p-10 rounded-xl text-slate-500'>
                      <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
                      <p className='text-sm'>Welcome back! Please sign in to continue</p>
          
                      {state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          
                          <Image 
                          src={assets.credit_star}
                          height={20}
                          width={20}
                          alt="Placeholder Image"
                          className=""/>
                          <input type="text" placeholder='Full Name' required className='outline-none text-sm'/>
                      </div>}
                      <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          
                          <Image 
                          src={assets.email_icon}
                          height={20}
                          width={20}
                          alt="Placeholder Image"
                          className=""/>
                          <input type="text" placeholder='Email Id' required className='outline-none text-sm'/>
                      </div>
                      <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          
                          <Image 
                          src={assets.lock_icon}
                          height={15}
                          width={15}
                          alt="Placeholder Image"
                          className=""/>
                          <input type="Password" placeholder='Password' required className='outline-none text-sm'/>
                      </div>
  
                      <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>
  
                      <button className='bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer'>{state === 'Login' ? 'Login' : 'Create Account'}</button>
  
  
                      {state === 'Login' ? 
                      <p className='mt-5 text-center'>Dont't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setstate('Sign Up')}>Sign up</span></p>
                      : 
                      <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setstate('Login')}>Login</span></p>
  }

                  </form>
              </div>
    )
  }
export default page