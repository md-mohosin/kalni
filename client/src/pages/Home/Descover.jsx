import img1 from '../../assets/images/1-removebg.png'
import img2 from '../../assets/images/2-removebg.png'
import { BsArrowRight } from "react-icons/bs";


const Descover = () => {
    return (
        <div className='xl:w-[1340px] pt-20 mx-auto flex flex-col lg:flex-row gap-4 justify-between font-montserrat'>
            <div className='bg-[#002944] lg:w-1/2 flex flex-col lg:flex-row md:flex-row justify-between gap-10 items-center p-4 rounded-xl mx-3'>
                <div className='space-y-4 xl:pl-8 pb-16 pt-10'>
                    <h1 className='text-xl'>Don't miss opportunity!</h1>
                    <h1 className='text-3xl italic'>Discover Offer 2024 Collection</h1>
                    <p className='flex items-center gap-2 pt-10'><span className='border-b'>Shop now</span> <BsArrowRight size={20} />
 </p>
                </div>
                <div className='flex flex-col lg:flex-row relative'>
                    {/* <img className='w-full overflow-hidden absolute bottom-1 lg:right-28' src={img2} alt="" /> */}
                    <img className='w-full overflow-hidden' src={img1} alt="" />
                </div>
            </div>
            <div className='bg-[#68A7F1] lg:w-1/2 flex flex-col lg:flex-row md:flex-row justify-between gap-10 items-center p-4 rounded-xl mx-3'>
                <div className='space-y-4 xl:pl-8'>
                    <h1 className='text-xl'>Don't miss opportunity!</h1>
                    <h1 className='text-3xl italic'>Discover Offer 2024 <br /> Collection</h1>
                    <p className='flex items-center gap-2 pt-10'><span className='border-b'>Shop now</span> <BsArrowRight size={20} />
 </p>
                </div>

                <div className='flex flex-col lg:flex-row relative'>
                    <img className='olg:right-28' src={img2} alt="" />
                    {/* <img className='overflow-hidden ' src={img1} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Descover;