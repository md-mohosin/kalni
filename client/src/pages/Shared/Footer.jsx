import logo from '../../assets/images/icon/Vector.png'
import card1 from '../../assets/images/icon/visa.png'
import card2 from '../../assets/images/icon/mastar.png'
import card3 from '../../assets/images/icon/gpay.png'
import card4 from '../../assets/images/icon/apple.png'

const Footer = () => {
    return (
        <div className='bg-white pt-16 text-black font-montserrat'>
            <div className='xl:w-[1340px] pb-20 mx-auto flex flex-col lg:flex-row gap-10 justify-between items-center'>
                <div>
                    <img src={logo} alt="" />
                    <h1 className='text-3xl italic font-bold text-black'>Kalni</h1>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-2xl font-semibold'>My Account</h1>
                    <p>Track Orders</p>
                    <p>Shipping</p>
                    <p>Wishlist</p>
                    <p>My Account</p>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-2xl font-semibold'>Information</h1>
                    <p>Our Story</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Contact Us</p>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-2xl font-semibold'>Talk to Us</h1>
                    <p>Got Questions? Call us</p>
                    <p>+670 413 90 762</p>
                    <p>shofy@support.com</p>
                    <p>79 Sleepy Hollow St.Jamaica, New York</p>
                </div>
            </div>
            <div className='bg-[#EAECF0]'>
                <div className='xl:w-[1340px] mx-auto py-3 flex justify-between'>
                    <h1>© 2025 All Rights Reserved </h1>
                    <div className='flex gap-2'>
                        <img src={card1} alt="" />
                        <img src={card2} alt="" />
                        <img src={card3} alt="" />
                        <img src={card4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;