import React from 'react'
import profile from '../images/avtar.png'
import post from '../images/post.jpeg'
import FeedPostOption from './FeedPostOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

function FeedPost({ profileUrl, name, desc, time,msg }) {
    return (
        <div className='bg-white w-full flex flex-col p-4 mt-4 rounded-md border border-gray-50'>
            <div className='flex w-full space-x-2'>
                {profileUrl ? <img className='h-10 w-10 object-fill rounded-full' src={profileUrl} /> : <img className='h-16 w-16 object-cover rounded-full' src={profile} />}
                <div className='flex flex-col items-start'>
                    <h1 className='text-black font-semibold'>{name}</h1>
                    <h1 className='text-black-500 text-sm'>{desc}</h1>
                    <p className='text-gray-400 text-xs'>{time}</p>
                </div>
            </div>
            <div className='flex flex-col mt-4'>
                <p className='text-gray-700 font-normal text-base'>{msg}</p>
                <img className='rounded-md mx-2 my-3' src={post} />
            </div>

            <div className='flex w-full justify-between px-2'>
                <p className='text-sm text-gray-600'>Likes 100</p>
                <p className='text-sm text-gray-600'>Comments 10</p>
            </div>

            <div className='w-full px-2 bg-gray-400 h-[1px] mt-4'></div>

            <div className='flex w-full justify-between mt-3'>
                <FeedPostOption Icon={ThumbUpOffAltIcon} title="Like" />
                <FeedPostOption Icon={InsertCommentIcon} title="Comment" />
                <FeedPostOption Icon={RepeatIcon} title="Repost" />
                <FeedPostOption Icon={SendIcon} title="Send" />
            </div>
        </div>
    )
}

export default FeedPost