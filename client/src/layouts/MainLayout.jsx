import React from 'react';
import Navbar from '../pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import NewsletterSubscribe from '../pages/Home/NewsletterSubscribe';
import UseAuth from '../hooks/UseAuth';
import LoadingSpinner from '../pages/Shared/LoadingSpinner';

const MainLayout = () => {
    const { loading } = UseAuth()
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    else {

        return (
            <div className='bg-[#F1F5F6]'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <NewsletterSubscribe></NewsletterSubscribe>
                <Footer></Footer>
            </div>
        );
    }
};

export default MainLayout;