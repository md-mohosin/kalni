import React from 'react';
import logo from '../../assets/images/icon/Vector.png'

const Footer = () => {
    return (
        <div className='bg-white pt-[120px] text-black'>
            <div className='xl:w-[1320px] mx-auto flex justify-between items-center'>
                <div>
                    <img src={logo} alt="" />
                    <h1 className='text-3xl italic font-bold text-black'>Kalni</h1>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-2xl'>My Account</h1>
                    <p>Track Orders</p>
                    <p>Shipping</p>
                    <p>Wishlist</p>
                    <p>My Account</p>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-2xl'>My Account</h1>
                    <p>Track Orders</p>
                    <p>Shipping</p>
                    <p>Wishlist</p>
                    <p>My Account</p>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-2xl'>My Account</h1>
                    <p>Track Orders</p>
                    <p>Shipping</p>
                    <p>Wishlist</p>
                    <p>My Account</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;