import React from 'react';
import img1 from '../../assets/images/1-removebg.png'
import img2 from '../../assets/images/2-removebg.png'

const Descover = () => {
    return (
        <div className='xl:w-[1320px] pb-20 mx-auto flex flex-col lg:flex-row gap-4 justify-between'>
            <div className='bg-[#002944] w-1/2 flex justify-between gap-10 items-center p-4 rounded-xl'>
                <div className='space-y-4'>
                    <h1 className='text-xl'>Don't miss opportunity!</h1>
                    <h1 className='text-2xl'>Discover Offer 2024 Collection</h1>
                    <p>Shop now</p>
                </div>
                <div className='flex flex-col lg:flex-row relative'>
                    <img className='w-full overflow-hidden absolute bottom-1 lg:right-28' src={img2} alt="" />
                    <img className='w-full overflow-hidden' src={img1} alt="" />
                </div>
            </div>
            <div className='bg-[#68A7F1] w-1/2 flex justify-between gap-10 items-center p-4 rounded-xl'>
                <div className='space-y-4'>
                    <h1 className='text-xl'>Don't miss opportunity!</h1>
                    <h1 className='text-2xl'>Discover Offer 2024 Collection</h1>
                    <p>Shop now</p>
                </div>

                <div className='flex flex-col lg:flex-row relative'>
                    <img className='overflow-hidden absolute bottom-1 lg:right-28' src={img2} alt="" />
                    <img className='overflow-hidden ' src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Descover;