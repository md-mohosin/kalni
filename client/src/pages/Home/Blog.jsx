import rectngl from '../../assets/images/Rectangle.png'
import blog2 from '../../assets/images/istockphoto.jpg'
import blog3 from '../../assets/images/images.jpg'
import blog4 from '../../assets/images/blogs.jpg'
import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosArrowForward } from 'react-icons/io';

const Blog = () => {
    return (
        <div className='xl:w-[1340px] mx-auto text-black font-montserrat pt-16'>
            <div className='px-6 py-3 rounded-lg mb-6 bg-white text-black flex justify-between items-center'>
                <h1 className='text-xl lg:text-4xl font-semibold'>From Our Blog</h1>

                <h1 className='flex items-center gap-3'>View all Products<IoIosArrowForward></IoIosArrowForward></h1>

            </div>

            <div className=" grid xl:grid-cols-4 place-items-center lg:grid-cols-3 md:grid-cols-2 gap-6">
                <div className="w-[306px] h-[330px] bg-white rounded-xl">
                    <img className='w-full h-[196px]'
                        src={rectngl} alt="" />

                    <div className='flex flex-col justify-center items-center space-y-1 pt-3'>
                        <p><span className='text-gray-400'>by</span> Jenny Wilson - <span className='text-gray-400'>03.05.2021</span></p>
                        <p> Aliquam tincidunt mauris eurisus </p>
                        <h1 className='flex items-center gap-1 pt-4'>Read more <HiArrowLongRight size={20} /></h1>
                    </div>
                </div>
                <div className="w-[306px] h-[330px] bg-white rounded-xl">
                    <img className='w-full h-[196px] rounded-t-xl'
                        src={blog2} alt="" />

                    <div className='flex flex-col justify-center items-center space-y-1 pt-3'>
                        <p><span className='text-gray-400'>by</span> Jenny Wilson - <span className='text-gray-400'>03.05.2021</span></p>
                        <p> Aliquam tincidunt mauris eurisus </p>
                        <h1 className='flex items-center gap-1 pt-4'>Read more <HiArrowLongRight size={20} /></h1>
                    </div>
                </div>
                <div className="w-[306px] h-[330px] bg-white rounded-xl">
                    <img className='w-full h-[196px] rounded-t-xl'
                        src={blog3} alt="" />

                    <div className='flex flex-col justify-center items-center space-y-1 pt-3'>
                        <p><span className='text-gray-400'>by</span> Jenny Wilson - <span className='text-gray-400'>03.05.2021</span></p>
                        <p> Aliquam tincidunt mauris eurisus </p>
                        <h1 className='flex items-center gap-1 pt-4'>Read more <HiArrowLongRight size={20} /></h1>
                    </div>
                </div>
                <div className="w-[306px] h-[330px] bg-white rounded-xl">
                    <img className='w-full h-[196px] rounded-t-xl'
                        src={blog4} alt="" />

                    <div className='flex flex-col justify-center items-center space-y-1 pt-3'>
                        <p><span className='text-gray-400'>by</span> Jenny Wilson - <span className='text-gray-400'>03.05.2021</span></p>
                        <p> Aliquam tincidunt mauris eurisus </p>
                        <h1 className='flex items-center gap-1 pt-4'>Read more <HiArrowLongRight size={20} /></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;