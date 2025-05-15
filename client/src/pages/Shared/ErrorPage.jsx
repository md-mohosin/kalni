import React from 'react';
import { Link } from 'react-router-dom';
import errorImge from '../../assets/images/error.png'
import Navbar from './Navbar';
import Footer from './Footer';

const ErrorPage = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>
            <div className='xl:w-[1320px] flex justify-center flex-col items-center bg-white mx-auto xl:h-[562px]'>
                <img src={errorImge} alt="" />
                <Link to='/'><button className='bg-blue-600 px-10 py-1 mt-4'>Back to Home</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;