import React, { useState } from 'react'
import logo from '../images/linkedin.png'

function Login() {

    const [name,setname] = useState('')
    const [photoUrl,setPhotoUrl] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return (
        <div className='flex flex-col justify-center w-full bg-white mx-auto'>
            <img src={logo} className='h-[150px] object-contain' />
            <div className='flex flex-col mx-auto w-full items-center'>
                <p className='text-black font-semibold text-xl'>Welcome Back</p>
                <p className='text-gray-600 font-normal mt-2'>Dont't miss your next opportunity. Sign in th stay updated on ypur professional world.</p>
                <form className='flex flex-col mt-8'>
                    <input className='bg-gray-100 p-4 m-2 w-[350px] rounded-md outline-sky-700' type="text" placeholder='Name' />
                    <input className='bg-gray-100 p-4 m-2 w-[350px] rounded-md outline-sky-700' type="url" placeholder='Profile Url (Optional)' />
                    <input className='bg-gray-100 p-4 m-2 w-[350px] rounded-md outline-sky-700' type="email" placeholder='Email' />
                    <input className='bg-gray-100 p-4 m-2 w-[350px] rounded-md outline-sky-700' type="password" placeholder='Password' />
                    <button className='bg-sky-700 m-2 rounded-md p-4 font-medium text-white hover:bg-sky-600' type='submit'>Sign in</button>
                </form>
                <p className='mt-4 text-black'>New to LinkedIn ?<span className='text-sky-700 font-medium ml-2 hover:text-sky-600'>Join Now</span></p>
            </div>
        </div>
    )
}

export default Login