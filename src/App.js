import React from 'react';
import { useSelector } from 'react-redux';
import FeedSection from './components/FeedSection';
import Header from './components/Header';
import Login from './components/Login';
import NewsSection from './components/NewsSection';
import SideBar from './components/SideBar';
import { selectUser } from './features/userSlice';

function App() {

    const user = useSelector(selectUser);

    return (
        <div className='bg-[#E6E6E6] h-auto'>
            <Header />

            {!user ?
                <Login /> :
                <div className='flex justify-evenly mx-auto mt-6 w-3/5 space-x-4'>
                    <SideBar />
                    <FeedSection />
                    <NewsSection />
                </div>}


        </div>
    );
}

export default App;
