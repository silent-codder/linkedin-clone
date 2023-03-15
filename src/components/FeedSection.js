import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import FeedInputOption from './FeedInputOption';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArticleIcon from '@mui/icons-material/Article';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { blue } from '@mui/material/colors';
import FeedPost from './FeedPost';

function FeedSection() {
  return (
    <div className='basis-[50%] mx-auto'>
        <div className='bg-white w-full p-4 rounded-md border border-gray-50'>
            <form className='border-2 relative flex rounded-full p-3 space-x-3'>
                <CreateIcon className='text-gray-500'/>
                <input className='outline-none border-none ' placeholder='Start a post'/>
                <button type='submit'></button>
            </form>

            <div className='flex justify-evenly pt-4'>
                <FeedInputOption Icon={InsertPhotoIcon} name="Photo" colorName="#0ea5e9"/>
                <FeedInputOption Icon={OndemandVideoIcon} name="Video" colorName="#8b5cf6"/>
                <FeedInputOption Icon={PostAddIcon} name="Document" colorName="#d97706"/>
                <FeedInputOption Icon={ArticleIcon} name="Article" colorName="#ca8a04"/>
            </div>
        </div>
        <FeedPost/>
    </div>
  )
}

export default FeedSection