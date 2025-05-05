import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { PiShoppingCartThin } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';


const Products = () => {

    const axiosPublic = UseAxiosPublic()

    const { data: Products = [] } = useQuery({
        queryKey: ['somePro'],
        queryFn: async () => {
            const result = await axiosPublic.get('/allProducts')
            return result.data
        }
    })

    const someProducts = Products.slice(0, 7)


    return (
        <div className='xl:w-10/12 mx-auto pb-[120px]'>
            <div className='p-2 rounded mb-4 bg-white text-black flex justify-between items-center'>
                <h1 className='text-xl lg:text-4xl'>Product Sections</h1>
                <Link to='/allProducts'>
                    <h1 className='flex items-center gap-1'>View all<IoIosArrowForward></IoIosArrowForward></h1>
                </Link>
            </div>

            <Swiper
                slidesPerView={4}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 1
                    },
                    480: {
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1280: {
                        slidesPerView: 4
                    }
                }}
                className="mySwiper"
                style={{ paddingLeft: '28px' }}
            >
                {
                    someProducts.map(product => <SwiperSlide >
                        <div className='w-80 h-[494px] rounded text-black p-3 bg-white space-y-5'>
                            <img src={product.image} className='w-full h-56' alt="" />
                            <h1 className='text-2xl font-semibold'>{product.name}</h1>
                            <p>{product.category}</p>
                            <p>({product.review}review)</p>
                            <p className='text-[#E4333E] font-semibold text-xl'>${product.price}</p>
                            <button className="btn w-full bg-[#3B4DF0] border-none"><PiShoppingCartThin size={20}></PiShoppingCartThin> Add to Cart</button>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Products;