import React from 'react';
import Banner from './Banner';
import Products from './AllProducts/Products';
import WeekProducts from './WeekProducts/WeekProducts';

const Home = () => {
    return (
        <div className='bg-[#F1F5F6]'>
            <Banner></Banner>
           <Products></Products>
           <WeekProducts></WeekProducts>
        </div>
    );
};

export default Home;