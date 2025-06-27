import logo from '../../assets/images/icon/Vector.png'
import { CiHeart, CiMenuBurger, CiShuffle, CiUser } from 'react-icons/ci';
import { PiShoppingCartThin } from 'react-icons/pi';
import { Link, NavLink } from 'react-router-dom';
import { TbRosetteDiscountFilled } from 'react-icons/tb';
import Marquee from 'react-fast-marquee';
import { FaBolt } from 'react-icons/fa6';
import { MdMenu } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import UseAuth from '../../hooks/UseAuth';
import UseCart from '../../hooks/UseCart';

const Navbar = () => {

    const { user } = UseAuth()
    const [cartData] = UseCart()


    const totalPrice = cartData.reduce((total, item) => total + item.productPrice, 0)



    return (
        <div className='bg-white font-montserrat'>

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




            {/* FIRST NAV */}
            <div className='lg:w-11/12 xl:w-[1340px] md:w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 pb-4 pt-4'>
                <div className='flex justify-between lg:w-3/4 w-full md:w-full'>
                    <Link to='/'>
                        <div className='flex items-center gap-2 lg:w-1/3'>
                            <img className='w-7 h-7 lg:w-12 lg:h-12' src={logo} alt="" />
                            <h1 className='text-xl lg:text-2xl font-bold italic text-black'>Kalni</h1>
                        </div>
                    </Link>


                    <div className='border-2 border-r-0 rounded-r rounded-l flex justify-between items-center xl:w-[756px]'>
                        <div className='flex items-center w-1/2'>




                            <div className='text-black pl-6 w-full flex items-center gap-4'>
                                <div to='/' className='flex items-center gap-14 cursor-pointer'>All Categories
                                    <span className='group-hover:rotate-180 duration-300'><IoIosArrowDown></IoIosArrowDown></span>
                                </div>
                            <h1 className='font-semibold hidden lg:flex text-gray-300'>|</h1>
                            </div>

                        </div>
                        <div className='flex justify-between w-full'>
                            <input type="text" className='bg-white w-full text-black focus:outline-none' placeholder='Search for products.....' />
                            <button className="hidden lg:flex btn py-6 bg-[#3B4DF0] border-none rounded-none rounded-r px-6">Search</button>
                        </div>
                    </div>
                    <MdMenu color='black' size={30} className='lg:hidden'></MdMenu>
                </div>

                <div className='flex text-black gap-[17px] items-center w-full xl:w-[325px]'>
                    {
                        user ?
                            <Link to='/dashboard/home'
                                className='flex justify-center items-center text-lg gap-1 text-[#3346ef] font-semibold'>
                                <h1>Dashboard</h1>
                            </Link>
                            :

                            <Link to='/login'><div className='flex items-center gap-1'>
                                <CiUser size={30}></CiUser>
                                <h1 className='text-sm'>Loign <br /> Account</h1>
                            </div>
                            </Link>
                    }
                    <div className='relative'>
                        <div className='absolute ml-6 text-white px-2 py-1 rounded-full bg-red-700 -top-3 -right-3 text-xs'>0</div>
                        <CiHeart size={30}></CiHeart>
                    </div>
                    <div className='relative'>
                        <div className='absolute ml-6 text-white px-2 py-1 rounded-full bg-red-700 -top-3 -right-3 text-xs'>0</div>
                        <CiShuffle size={30}></CiShuffle>
                    </div>
                    <Link to='/allShopingCart'>
                        <div className='flex gap-4 items-center'>
                            <div className='relative'>
                                <div className='absolute ml-6 text-white px-2 py-1 rounded-full bg-red-700 -top-3 -right-3 text-xs'>{cartData.length}</div>
                                <PiShoppingCartThin size={30}></PiShoppingCartThin>
                            </div>
                            <div className='pl-1'>
                                <h1>Your Cart</h1>
                                <p className='font-semibold'>${parseInt(totalPrice)}</p>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>

            {/* <hr className='border' /> */}



            {/* SECOND NAV */}
            <div className='text-black pt-3 hidden lg:flex'>
                <div className='xl:w-[1340px] mx-auto flex justify-between items-center'>
                    <div className='flex items-center gap-8'>
                        <h1 className='text-lg flex items-center gap-2'><CiMenuBurger size={25}></CiMenuBurger>Brows All Categories</h1>
                        <h1>|</h1>
                    </div>
                    <NavLink to='/'>Home</NavLink>

                    <div className='relative group'>
                        <div to='/' className='flex items-center gap-2 cursor-pointer'>Popular Categories
                            <span className='group-hover:rotate-180 duration-300'><IoIosArrowDown></IoIosArrowDown></span>
                        </div>
                        <ul className='absolute z-50 bg-black p-3 rounded-md text-white hidden group-hover:block'>
                            <NavLink>All Categories</NavLink>
                        </ul>
                    </div>
                    <div className='relative group'>
                        <div to='/' className='flex items-center gap-2 cursor-pointer'>Product Section
                            <span className='group-hover:rotate-180 duration-300'><IoIosArrowDown></IoIosArrowDown></span>
                        </div>
                        <ul className='absolute z-50 bg-black p-3 rounded-md text-white hidden group-hover:block'>
                            <NavLink to='/allProducts'>All Products</NavLink>
                        </ul>
                    </div>
                    <div className='relative group'>
                        <div to='/' className='flex items-center gap-2 cursor-pointer'>Newsletter
                            <span className='group-hover:rotate-180 duration-300'><IoIosArrowDown></IoIosArrowDown></span>
                        </div>
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