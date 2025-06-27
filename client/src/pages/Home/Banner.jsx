import car from '../../assets//images/icon/car.png'
import hour from '../../assets/images/icon/hour.png'
import dolor from '../../assets/images/icon/dolor.png'
import modelimage from '../../assets/images/elegant-fashion-model-sitting-looks-to-side-grey-background-92440424.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div className='banner'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='bg-white gap-10 h-auto flex flex-col-reverse lg:flex-row items-center justify-between pt-4'>
                        <div className='lg:w-1/2 text-black px-4'>
                            <div className='flex flex-col xl:w-[630px] justify-self-end space-y-6'>
                                <h1 className='text-4xl lg:text-6xl font-bold font-inter'>Discover your <br />perfect   stylish and <br /> suited cloths</h1>
                                <p className='font-inter'>Up to 20% discount
                                    in all categories of <br /> your buying fashion clothes. Limited time only. Get hurry!</p>
                                <Link to='/allProducts'>
                                    <button className='font-inter btn bg-[#1D2939] lg:w-36 w-full text-white mb-11'>Shop now</button>
                                    </Link>
                            </div>
                        </div>
                        <div className='lg:w-1/2'>
                            <img className='w-screen h-auto' src={modelimage} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white gap-10 h-auto flex flex-col-reverse lg:flex-row items-center justify-between pt-4'>
                        <div className='lg:w-1/2 text-black px-4'>
                            <div className=' flex flex-col xl:w-[630px] justify-self-end space-y-6'>
                                <h1 className='text-4xl lg:text-6xl font-bold font-inter'>Discover your  perfect <br /> stylish and  suited cloth</h1>
                                <p>Up to 20% discount
                                    in all categories of <br /> your buying fashion clothes. Limited time only. Get hurry!</p>
                                <button className='btn bg-[#1D2939] lg:w-36 w-full mb-11 font-inter'>Shop now</button>
                            </div>
                        </div>
                        <div className='lg:w-1/2'>
                            <img className='w-screen h-auto' src={modelimage} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>




            <div className='bg-[#1D2939] text-white font-montserrat'>
                <div className='w-8/12 mx-auto flex flex-col lg:flex-row gap-10 justify-between items-center py-5'>
                    <div className='flex items-center gap-4'>
                        <img src={car} alt="" />
                        <div>
                            <h1>Free Shipping & Return</h1>
                            <p>Free Shipping on All Orders over $49.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={dolor} alt="" />
                        <div>
                            <h1>Money Back Guarantee</h1>
                            <p>100% Money Back Guarantee</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={hour} alt="" />
                        <div>
                            <h1>Online Support 24/7</h1>
                            <p>Open consultancy all time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;