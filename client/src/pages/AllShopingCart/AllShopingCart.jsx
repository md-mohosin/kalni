import React from 'react';
import UseCart from '../../hooks/UseCart';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';
import Swal from 'sweetalert2'

const AllShopingCart = () => {
    const axiosPublic = UseAxiosPublic()
    const [cartData, refetch] = UseCart()
    const totalPrice = cartData.reduce((total, item) => total + item.productPrice, 0)

    const handleDelete = (id) => {
        axiosPublic.delete(`/cart/${id}`)
            .then(() => {
                refetch()
            })
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Delete it",
            showConfirmButton: false,
            timer: 1500
        })


    }

    return (
        <div className='xl:w-[1340px] mx-auto text-black pt-20 pb-16'>
            <div className='flex gap-10 justify-between bg-white p-8 rounded-md'>
                <div className='w-[900px]'>
                    <table className="table">
                        {/* head */}
                        <thead className='text-black'>
                            <tr>
                                <th className='text-lg'>Product</th>
                                <th className='text-lg'>Price</th>
                                <th className='text-lg'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartData.map(item => <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="h-16 w-[72px]">
                                                    <img
                                                        src={item.produtImage}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='text-xl font-semibold'>{item.productName}</h1>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-black'>
                                        <h1 className='text-[#3B4DF0] font-semibold text-lg'>{item.productPrice}</h1>
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)}>
                                            <AiOutlineDelete size={30} color='red'></AiOutlineDelete>
                                        </button>
                                    </th>
                                </tr>
                                )
                            }

                        </tbody>

                        <Link to='/allProducts'>
                            <div className='pt-6'>
                                <button className='btn bg-[#3B4DF0] border-none text-white'>Continue Shoping</button>
                            </div>
                        </Link>

                    </table>
                </div>


                {/* TOTALS */}
                <div className='w-[356px]'>
                    <div className='space-y-8 border p-6'>
                        <h1 className='text-2xl font-bold'>Cart Totals</h1>
                        <div className="flex justify-between items-center font-semibold text-lg">
                            <h1>Shiping Address:</h1>
                            <h1>Shiping to <br /> Bangladesh</h1>
                        </div>
                        <div className='flex justify-between items-center font-semibold text-lg'>
                            <h1>Total</h1>
                            <h1 className='text-[#3B4DF0]'>${parseInt(totalPrice)}</h1>
                        </div>
                    </div>
                    <Link to='/checkout'>
                        <button className='btn bg-[#3B4DF0] w-full border-none mt-4 py-6'>Proceed to Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllShopingCart;