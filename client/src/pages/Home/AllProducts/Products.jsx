import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../../hooks/UseAuth';
import cartIcon from '../../../assets/images/shopping-cart-plus.png'


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
        <div className='products xl:w-[1340px] pt-20 mx-auto font-montserrat'>
            <div className='px-6 py-3 rounded-lg mb-6 bg-white text-black flex justify-between items-center'>
                <h1 className='text-xl lg:text-4xl font-semibold'>Product Sections</h1>
                <Link to='/allProducts'>
                    <h1 className='flex items-center gap-3'>View all<IoIosArrowForward></IoIosArrowForward></h1>
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
                    someProducts.map(product => <SwiperSlide key={product._id}>
                        <div className='w-[306px] h-[494px] rounded-[12px] text-black p-6 bg-white flex flex-col justify-between mx-2'>
                            <img src={product.image} className='w-full h-56 rounded' alt="" />
                            <h1 className='text-3xl font-semibold font-montserrat'>{product.name}</h1>
                            <p>{product.category}</p>
                            <p>({product.review}review)</p>
                            <p className='text-[#E4333E] font-semibold text-xl'>${product.price}</p>
                            <button onClick={() => handleAddCart(`/detailsProduct/${product._id}`)}
                                className="btn w-full bg-[#3B4DF0] border-none"><img src={cartIcon} alt="" /> Add to Cart</button>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Products;