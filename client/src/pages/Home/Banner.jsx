import React from 'react';
import car from '../../assets//images/icon/car.png'
import modelimage from '../../assets/images/elegant-fashion-model-sitting-looks-to-side-grey-background-92440424.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {

    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='bg-white gap-10 h-auto flex flex-col-reverse lg:flex-row items-center justify-between'>
                        <div className='lg:w-1/2 text-black'>
                            <div className=' flex flex-col lg:justify-self-end space-y-9'>
                                <h1 className='text-4xl lg:text-6xl font-bold'>Discover your  perfect <br /> stylish and  suited cloth</h1>
                                <p>Up to 20% discount
                                    in all categories of <br /> your buying fashion clothes. Limited time only. Get hurry!</p>
                                <button className='btn bg-[#1D2939] w-36 text-white'>Shop now</button>
                            </div>
                        </div>
                        <div className='lg:w-1/2'>
                            <img className='w-screen h-auto' src={modelimage} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white gap-10 h-auto flex flex-col-reverse lg:flex-row items-center justify-between'>
                        <div className='lg:w-1/2 text-black'>
                            <div className=' flex flex-col lg:justify-self-end space-y-9'>
                                <h1 className='text-4xl lg:text-6xl font-bold'>Discover your  perfect <br /> stylish and  suited cloth</h1>
                                <p>Up to 20% discount
                                    in all categories of <br /> your buying fashion clothes. Limited time only. Get hurry!</p>
                                <button className='btn bg-[#1D2939] w-36'>Shop now</button>
                            </div>
                        </div>
                        <div className='lg:w-1/2'>
                            <img className='w-screen h-auto' src={modelimage} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>




            <div className='bg-[#1D2939] text-white'>
                <div className='w-9/12 mx-auto flex flex-col lg:flex-row gap-10 justify-between items-center p-4'>
                    <div className='flex items-center gap-4'>
                        <img src={car} alt="" />
                        <div>
                            <h1>Free Shipping & Return</h1>
                            <p>Free Shipping on All Orders over $49.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={car} alt="" />
                        <div>
                            <h1>Free Shipping & Return</h1>
                            <p>Free Shipping on All Orders over $49.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={car} alt="" />
                        <div>
                            <h1>Free Shipping & Return</h1>
                            <p>Free Shipping on All Orders over $49.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;