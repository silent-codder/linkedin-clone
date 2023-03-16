import React from 'react'

function FeedPostOption({Icon,title}) {
  return (
    <div className='mx-auto flex flex-col items-center text-gray-500 space-y-1 hover:text-black'>
        {Icon && <Icon className="h-1"/>}
        <h3 className='font-sans text-xs'>{title}</h3>
    </div>
  )
}

export default FeedPostOption