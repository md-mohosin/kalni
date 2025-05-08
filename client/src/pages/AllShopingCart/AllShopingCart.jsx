import React from 'react';
import UseCart from '../../hooks/UseCart';

const AllShopingCart = () => {
    const [cartData] = UseCart()
    return (
        <div className='xl:w-[1320px] mx-auto text-black pt-20'>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-black'>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartData.map(item => <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-black'>
                                        {item.productPrice}
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllShopingCart;