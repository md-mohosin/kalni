import React from 'react';
import Banner from './Banner';
import Products from './AllProducts/Products';
import WeekProducts from './WeekProducts/WeekProducts';
import Descover from './Descover';
import BestProducts from './BestProducts/BestProducts';
import NewsletterSubscribe from './NewsletterSubscribe';

const Home = () => {
    return (
        <div className='bg-[#F1F5F6]'>
            <Banner></Banner>
           <Products></Products>
           {/* <BestProducts></BestProducts> */}
           <Descover></Descover>
           <WeekProducts></WeekProducts>
        </div>
    );
};

export default Home;