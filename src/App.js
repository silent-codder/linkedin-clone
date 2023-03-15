import React from 'react';
import FeedSection from './components/FeedSection';
import Header from './components/Header';
import NewsSection from './components/NewsSection';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='bg-[#E6E6E6] h-[1005px]'>
        <Header/>
        <div className='flex justify-evenly mx-auto mt-6 w-3/5 space-x-4'>
            <SideBar/>
            <FeedSection/>
            <NewsSection/>
        </div>
    </div>
  );
}

export default App;
