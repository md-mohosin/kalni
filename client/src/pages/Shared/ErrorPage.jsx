import React from 'react';
import { Link } from 'react-router-dom';
import errorImge from '../../assets/images/error.png'
import Navbar from './Navbar';
import Footer from './Footer';
import NewsletterSubscribe from '../Home/NewsletterSubscribe';

const ErrorPage = () => {
    return (
        <div className='bg-[#F1F5F6]'>
            <Navbar></Navbar>
            <div className='xl:w-[1340px] xl:h-[562px] flex justify-center flex-col items-center bg-white mx-auto mt-12 mb-24 space-y-4'>
                <img src={errorImge} alt="" />
                <h1 className='text-black font-semibold text-3xl'>The page you are looking for it’s not here...</h1>
                <Link to='/'><button className='bg-blue-600 mt-4 w-72 py-2 rounded'>Back to Home</button></Link>
            </div>
            <NewsletterSubscribe></NewsletterSubscribe>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;