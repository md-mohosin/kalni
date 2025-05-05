import React from 'react';
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { PiShoppingCartThin } from 'react-icons/pi';

const ViewAllWeekProducts = () => {

    const axiosPublic = UseAxiosPublic()

    const { data: allProducts = [] } = useQuery({
        queryKey: ['weekpro'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allProducts')
            return res.data
        }
    })

    const allWeekProducts = allProducts.filter(item => item.campaign == 'weekend-deals')

    return (
        <div className='text-black pt-[120px] pb-[120px] w-full xl:w-10/12 mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-center gap-6 gap-x-6'>
                {
                    allWeekProducts.map(singleProduct => <div className='flex flex-col justify-between border w-[300px] h-full rounded text-black p-3 bg-white space-y-5'>
                        <img src={singleProduct.image} className='w-full h-56' alt="" />
                        <h1 className='text-2xl font-semibold'>{singleProduct.name}</h1>
                        <p>{singleProduct.category}</p>
                        <p>({singleProduct.review}review)</p>
                        <p className='text-[#E4333E] font-semibold text-xl'>${singleProduct.price}</p>
                        <button className="btn w-full bg-[#3B4DF0] border-none"><PiShoppingCartThin size={20}></PiShoppingCartThin> Add to Cart</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ViewAllWeekProducts;