import React from 'react';
import img1 from '../../assets/images/1-removebg.png'
import img2 from '../../assets/images/2-removebg.png'

const Descover = () => {
    return (
        <div className='xl:w-10/12 mx-auto flex flex-col lg:flex-row gap-10 pb-[120px]'>
            <div className='bg-[#002944] flex justify-between items-center p-4 rounded-xl'>
                <div className='space-y-4'>
                    <h1 className='text-xl'>Don't miss opportunity!</h1>
                    <h1 className='text-2xl'>Discover Offer 2024 Collection</h1>
                    <p>Shop now</p>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <img src={img2} alt="" />
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className='bg-[#68A7F1] flex justify-between items-center p-4 rounded-xl'>
                <div className='space-y-4'>
                    <h1 className='text-xl'>Don't miss opportunity!</h1>
                    <h1 className='text-2xl'>Discover Offer 2024 Collection</h1>
                    <p>Shop now</p>
                </div>

                <div className='flex flex-col lg:flex-row'>
                    <img src={img2} alt="" />
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Descover;