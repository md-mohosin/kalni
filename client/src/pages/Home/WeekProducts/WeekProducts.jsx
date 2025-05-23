import React from 'react';
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { PiShoppingCartThin } from 'react-icons/pi';
import { Navigation } from 'swiper/modules';
import { IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import Swal from 'sweetalert2';

const WeekProducts = () => {

    const {user}=UseAuth()
    const navigate = useNavigate()

    const axiosPublic = UseAxiosPublic()

    const { data: products = [] } = useQuery({
        queryKey: ['weekPro'],
        queryFn: async () => {
            const result = await axiosPublic.get('/allProducts')
            return result.data
        }
    })


    const weekProduct = products.filter(product => product.campaign == 'weekend-deals')

    const someWeekProduct = weekProduct.slice(0, 6)



    const AddToCart = (id) => {

        if (!user) {

            Swal.fire({
                title: "Please log in to save this item to your cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
            });
        }

        else {
            navigate(`/detailsProduct/${id}`)
        }
    }



    return (
        <div className='xl:w-[1320px] pb-20 mx-auto'>
            <div className='p-2 rounded mb-6 bg-white text-black flex justify-between items-center'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
                    <h1 className='text-xl lg:text-4xl flex justify-self-start'>Deal of the week </h1>
                    <p>Don't miss out on this weeks deals</p>
                </div>
                <Link to='/allWeekProducts'>
                    <h1 className='flex items-center gap-1'>View all <IoIosArrowForward></IoIosArrowForward></h1>
                </Link>
            </div>

            <Swiper
                slidesPerView={4}
                navigation={true}
                spaceBetween={32}
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
            // style={{ paddingLeft: '28px' }}
            >
                {
                    someWeekProduct.map(product => <SwiperSlide key={product._id}>

                        <div className='w-full h-[494px] rounded-[12px] text-black p-4 bg-white space-y-3 flex flex-col justify-between'>
                            <img src={product.image} className='w-full h-56' alt="" />
                            <h1 className='text-2xl font-semibold'>{product.name}</h1>
                            <p>{product.category}</p>
                            <p>({product.review}review)</p>
                            <p className='text-[#E4333E] font-semibold text-xl'>${product.price}</p>
                            <button onClick={() => AddToCart(product._id)}
                                className="btn w-full bg-[#3B4DF0] border-none"><PiShoppingCartThin size={20}></PiShoppingCartThin> Add to Cart</button>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default WeekProducts;