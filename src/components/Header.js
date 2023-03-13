import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import avatar from '../images/avtar.png';

function Header() {
    return (
        <div className='flex justify-evenly bg-white shadow-sm p-2 sticky top-0'>
            {/* left side */}
            <div className='flex space-x-4'>
                <img className='h-10' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' />
                <div className='bg-gray-200 h-10 items-center justify-center flex rounded-md px-2'>
                    <SearchIcon className='text-gray-400' />
                    <input className='bg-transparent outline-none border-none mx-1' />
                </div>
            </div>

            {/* right side */}
            <div className='flex space-x-8'>
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={PeopleIcon} title="My Network" />
                <HeaderOption Icon={WorkIcon} title="Jobs" />
                <HeaderOption Icon={MessageIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption avatar={avatar} title="Me" />
            </div>
        </div>
    )
}

export default Header