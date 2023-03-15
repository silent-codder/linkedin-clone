import React from 'react'

function FeedInputOption({ Icon, name, colorName }) {
    const color_ = "teal"
    return (
        <div className='flex space-x-2'>
            <Icon style={{color: colorName}}/>
            <p className='text-gray-500'>{name}</p>
        </div>
    )
}

export default FeedInputOption