import React from 'react';
import UseCart from '../../hooks/UseCart';

const Checkout = () => {

    const [cartData] = UseCart()
    return (
        <div>
            <div className='w-[1340px] mx-auto flex justify-between gap-10 text-black py-28'>

                <div className='w-1/2 border'>
                </div>
                <div className='w-1/2'>
                    {/* use table format */}
                </div>

            </div>
        </div>
    );
};

export default Checkout;