import { Avatar, Icon } from '@mui/material'
import React from 'react'

function HeaderOption({Icon,title,avatar}) {
  return (
    <div className='mx-auto flex flex-col items-center text-gray-500 hover:text-black'>
        {Icon && <Icon/>}
        {avatar && <img className='rounded-full h-6 w-6 object-cover' src={avatar} />}
        <h3 className='font-sans text-sm'>{title}</h3>
    </div>
  )
}

export default HeaderOption