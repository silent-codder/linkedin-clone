import React from 'react'
import avatar from '../images/avtar.png';
import bg from '../images/bg.jpg';

const HASH_DATA = [
    "android",
    "reactjs",
    "angular",
    "webdevelopment",
    "fresher",
    "talent"
]

function NewsSection() {

    const hashTag = HASH_DATA.map((hash) =>
        <div className='flex space-x-2 mt-1 hover:bg-gray-200 hover:px-1 hover:rounded-md'>
            <h1 className='text-gray-500'>#</h1>
            <h1 className='text-gray-500'>{hash}</h1>
        </div>
    )
    return (
        <div className='basis-[25%]'>
            <div className='flex flex-col pb-3 mx-auto items-center border-2 bg-white rounded-xl rounded-b-none overflow-hidden'>
                <img className='h-[90px] w-full object-cover -mb-10' src={bg} />
                <img className='rounded-full w-[100px] h-[100px] object-cover border-4 border-white' src={avatar} />
                <h1 className='font-semibold'>Ajinkya Shinde</h1>
                <h1 className='text-sm text-gray-400'>Android Developer</h1>
            </div>

            <div className='flex flex-col px-3 bg-white py-4 mx-auto border-2 border-t-0 rounded-2xl items-stretch rounded-t-none'>
                <div className='flex justify-between w-full'>
                    <p className='font-normal text-gray-800'>Who viewed your profile</p>
                    <p className='font-medium text-right text-cyan-700'>109</p>
                </div>
                <div className='flex w-full justify-between'>
                    <p className='font-normal text-left text-gray-800'>Views of your post</p>
                    <p className='font-medium text-cyan-700'>83</p>
                </div>
            </div>

            <div className='flex flex-col px-3 bg-white py-4 mx-auto border-2 rounded-2xl items-stretch'>
                <h1 className='mb-4'>Recent</h1>
                {hashTag}
            </div>

        </div>
    )
}

export default NewsSection