import React from 'react';
import logo from '../../assets/images/icon/Vector.png'
import { CiHeart, CiMenuBurger, CiShuffle, CiUser } from 'react-icons/ci';
import { PiShoppingCartThin } from 'react-icons/pi';
import { Link, NavLink } from 'react-router-dom';
import { TbRosetteDiscountFilled } from 'react-icons/tb';
import Marquee from 'react-fast-marquee';
import { FaBolt, FaCaretDown } from 'react-icons/fa6';
import { MdMenu } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import UseAuth from '../../hooks/UseAuth';

const Navbar = () => {

    const { user, logout } = UseAuth()


    const handlelogout = () => {
        logout()
    }

    return (
        <div className='bg-white'>

            <div className='bg-[#3B4DF0] p-3'>
                <Marquee pauseOnHover={true}>
                    <div className='flex gap-x-20 cursor-pointer text-white'>
                        <h1 className='flex items-center gap-2'><FaBolt></FaBolt>Special offer: enjoy 3 months of shopify for $1/month</h1>
                        <h1 className='flex items-center gap-2'><FaBolt></FaBolt>Special offer: enjoy 3 months of shopify for $1/month</h1>
                        <h1 className='flex items-center gap-2'><FaBolt></FaBolt>Special offer: enjoy 3 months of shopify for $1/month</h1>
                        <h1 className='flex items-center gap-2 pl-4'><FaBolt></FaBolt>Special offer: enjoy 3 months of shopify for $1/month</h1>
                    </div>
                </Marquee>
            </div>




            <div className='lg:w-11/12 xl:w-10/12 md:w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 pb-6 pt-6'>
                <div className='flex justify-between lg:w-3/4 w-full md:w-full'>
                    <Link to='/'>
                        <div className='flex items-center gap-2 lg:w-1/3'>
                            <img className='w-7 h-7 lg:w-12 lg:h-12' src={logo} alt="" />
                            <h1 className='text-xl lg:text-2xl font-bold italic text-black'>Kalni</h1>
                        </div>
                    </Link>


                    <div className='border-2 flex justify-between  items-center lg:w-2/3'>
                        <select defaultValue="All Products" className="hidden lg:flex select select-ghost text-black focus:bg-white focus:text-black focus:outline-none">
                            <option disabled={true}>All Products</option>
                            <option>Inter</option>
                            <option>Poppins</option>
                            <option>Raleway</option>
                        </select>
                        <h1 className='font-semibold text-black px-4 hidden lg:flex'>|</h1>
                        <input type="text" className='bg-white w-auto text-black' placeholder='Search ' />
                        <button className="hidden lg:flex btn bg-[#3B4DF0] border-none rounded-none px-6">Search</button>
                    </div>
                    <MdMenu color='black' size={30} className='lg:hidden'></MdMenu>
                </div>

                <div className='flex text-black justify-between items-center w-full lg:w-1/4'>
                    {
                        user ?
                            <button onClick={handlelogout}
                                className='btn bg-[#1D2939] border-none'>
                                Logout
                            </button>
                            :

                            <Link to='/login'><div className='flex items-center gap-1'>
                                <CiUser size={30}></CiUser>
                                <h1 className='text-sm'>Loign <br /> Account</h1>
                            </div></Link>
                    }
                    <div className='relative'>
                        <div className='badge text-sm absolute ml-6 rounded-full bg-red-700 border-none'>0</div>
                        <CiHeart size={35}></CiHeart>
                    </div>
                    <div className='relative'>
                        <div className='badge text-sm absolute ml-6 rounded-full bg-red-700 border-none'>0</div>
                        <CiShuffle size={35}></CiShuffle>
                    </div>
                    <div className='relative flex gap-4 items-center'>
                        <div className='badge text-sm absolute ml-6 rounded-full bg-red-700 border-none'>0</div>
                        <PiShoppingCartThin size={35}></PiShoppingCartThin>
                        <div>
                            <h1>Your Cart</h1>
                            <p>$0.00</p>
                        </div>
                    </div>
                </div>



            </div>

            <hr className='border' />

            <div className='text-black pt-6 font-semibold hidden lg:flex'>
                <div className='w-10/12 mx-auto flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <CiMenuBurger size={25}></CiMenuBurger>
                        <h1 className='text-lg font-semibold'>Brows All Categories</h1>
                    </div>
                    <h1>|</h1>

                    <NavLink to='/'>Homes</NavLink>

                    <div className='relative group'>
                        <NavLink to='/' className='flex items-center'>Popular Categories
                            <span className='group-hover:rotate-180 duration-300'><IoIosArrowDown></IoIosArrowDown></span>
                        </NavLink>
                        <ul className='absolute z-50 bg-black p-3 rounded-md text-white hidden group-hover:block'>
                            <NavLink>All Categories</NavLink>
                        </ul>
                    </div>
                    <div className='relative group'>
                        <NavLink to='/' className='flex items-center'>Product Section
                            <span className='group-hover:rotate-180 duration-300'><IoIosArrowDown></IoIosArrowDown></span>
                        </NavLink>
                        <ul className='absolute z-50 bg-black p-3 rounded-md text-white hidden group-hover:block'>
                            <NavLink>All Products</NavLink>
                        </ul>
                    </div>
                    <div className='relative group'>
                        <NavLink to='/' className='flex items-center'>Newsletter
                            <span className='group-hover:rotate-180 duration-300'><IoIosArrowDown></IoIosArrowDown></span>
                        </NavLink>
                        <ul className='absolute z-50 bg-black p-3 rounded-md text-white hidden group-hover:block'>
                            <NavLink to='/allpa'>All News</NavLink>
                        </ul>
                    </div>
                    <Link>Contact Us</Link>
                    <h1 className='flex gap-1 items-center'><TbRosetteDiscountFilled color='red' size={25}></TbRosetteDiscountFilled>$20% off Your First Order</h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;