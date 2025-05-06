import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { PiShoppingCartThin } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../../hooks/UseAuth';


const Products = () => {

    const axiosPublic = UseAxiosPublic()
    const { user } = UseAuth()
    const navigate = useNavigate()

    const { data: Products = [] } = useQuery({
        queryKey: ['somePro'],
        queryFn: async () => {
            const result = await axiosPublic.get('/allProducts')
            return result.data
        }
    })

    const someProducts = Products.slice(0, 7)



    const handleAddCart = (id) => {

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
            navigate(id)
        }

    }


    return (
        <div className='xl:w-[1320px] mx-auto pb-[120px]'>
            <div className='p-2 rounded mb-4 bg-white text-black flex justify-between items-center'>
                <h1 className='text-xl lg:text-4xl'>Product Sections</h1>
                <Link to='/allProducts'>
                    <h1 className='flex items-center gap-1'>View all<IoIosArrowForward></IoIosArrowForward></h1>
                </Link>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={32}
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
            // style={{ paddingLeft: '28px' }}
            >
                {
                    someProducts.map(product => <SwiperSlide >
                        <div className='w-[306px] h-[494px] rounded-[12px] text-black p-4 bg-white space-y-3 flex flex-col justify-between'>
                            <img src={product.image} className='w-full h-56' alt="" />
                            <h1 className='text-2xl font-semibold'>{product.name}</h1>
                            <p>{product.category}</p>
                            <p>({product.review}review)</p>
                            <p className='text-[#E4333E] font-semibold text-xl'>${product.price}</p>
                            <button onClick={() => handleAddCart(`/detailsProduct/${product._id}`)}
                                className="btn w-full bg-[#3B4DF0] border-none"><PiShoppingCartThin size={20}></PiShoppingCartThin> Add to Cart</button>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Products;