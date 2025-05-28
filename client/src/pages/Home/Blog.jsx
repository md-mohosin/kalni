import rectngl from '../../assets/images/Rectangle.png'
import { HiArrowLongRight } from "react-icons/hi2";

const Blog = () => {
    return (
        <div className="xl:w-[1320px] mx-auto text-black font-montserrat pb-20 grid xl:grid-cols-4 place-items-center lg:grid-cols-3 md:grid-cols-2 gap-6">
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
                <img className='w-full h-[196px]'
                 src={rectngl} alt="" />

                 <div className='flex flex-col justify-center items-center space-y-1 pt-3'>
                    <p><span className='text-gray-400'>by</span> Jenny Wilson - <span className='text-gray-400'>03.05.2021</span></p>
                    <p> Aliquam tincidunt mauris eurisus </p>
                    <h1 className='flex items-center gap-1 pt-4'>Read more <HiArrowLongRight size={20} /></h1>
                 </div>
            </div>
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
                <img className='w-full h-[196px]'
                 src={rectngl} alt="" />

                 <div className='flex flex-col justify-center items-center space-y-1 pt-3'>
                    <p><span className='text-gray-400'>by</span> Jenny Wilson - <span className='text-gray-400'>03.05.2021</span></p>
                    <p> Aliquam tincidunt mauris eurisus </p>
                    <h1 className='flex items-center gap-1 pt-4'>Read more <HiArrowLongRight size={20} /></h1>
                 </div>
            </div>
        </div>
    );
};

export default Blog;