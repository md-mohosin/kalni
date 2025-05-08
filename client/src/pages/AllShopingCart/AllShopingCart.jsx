import React from 'react';
import UseCart from '../../hooks/UseCart';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const AllShopingCart = () => {
    const [cartData] = UseCart()
    return (
        <div className='xl:w-[1320px] mx-auto text-black pt-20 pb-16'>
            <div className='flex gap-10 justify-between'>
                <div className='border w-[900px]'>
                    <table className="table">
                        {/* head */}
                        <thead className='text-black'>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Action</th>
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
                                                <h1 className='text-lg font-semibold'>{item.productName}</h1>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-black'>
                                        <h1 className='text-[#3B4DF0] font-semibold text-lg'>{item.productPrice}</h1>
                                    </td>
                                    <th>
                                        <button>
                                            <AiOutlineDelete size={30} color='red'></AiOutlineDelete>
                                        </button>
                                    </th>
                                </tr>
                                )
                            }

                        </tbody>

                        <Link to='/allProducts'>
                            <div className='pt-4'>
                                <button className='btn bg-[#3B4DF0] border-none text-white'>Continue Shoping</button>
                            </div>
                        </Link>

                    </table>
                </div>
                <div className='w-[356px]'>
                    <div>
                        <h1 className='text-2xl font-bold'>Cart Totals</h1>
                        <div className='flex justify-between items-center'>
                            <h1>Subtotals</h1>
                            <p>345987</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllShopingCart;