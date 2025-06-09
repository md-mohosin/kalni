import React from 'react';
import rotateShirt from '../../../assets/images/rotate-shirt.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { PiShoppingCartThin } from 'react-icons/pi';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BestProducts = () => {

    const axiosPublic = UseAxiosPublic()

    const { data: products = [] } = useQuery({
        queryKey: ['bestPro'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allProducts')
            return res.data
        }
    })

    const bestProducts = products.filter(product => product.campaign == 'best-price')

    return (
        <div className='pb-[120px] xl:w-[1340px] mx-auto text-black'>
            <div className='bg-white p-3 rounded-md'>
                <h1 className='text-xl'>Get Our Best Prices :{bestProducts.length}</h1>
            </div>
            <div className='flex justify-between'>
               
                    {/* <div className='bg-[#FFEFE8] w-72 h-[495px]'>
                        <div className='space-y-3'>
                            <h1 className='text-3xl'>Clothing & Apparel</h1>
                            <p>SALE UP TO 30% OFF</p>
                            <button className='btn'>Shop Now</button>
                        </div>
                        <img src={rotateShirt} alt="" />
                    </div> */}
                
            </div>
        </div>
    );
};

export default BestProducts;