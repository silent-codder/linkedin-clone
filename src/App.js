import React from 'react';
import FeedSection from './components/FeedSection';
import Header from './components/Header';
import NewsSection from './components/NewsSection';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='bg-[#E6E6E6]'>
        <Header/>
        <div className='flex justify-between mx-auto mt-8 w-3/5'>
            <SideBar/>
            <FeedSection/>
            <NewsSection/>
        </div>
    </div>
  );
}

export default App;
