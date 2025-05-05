import React from 'react';
import message from '../../assets/images/icon/messege.png'
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const NewsletterSubscribe = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully you subscribe",
            showConfirmButton: false,
            timer: 1500
        });
        console.log(data)

    }





    return (
        <div className='bg-[#3B4DF0]'>
            <div className='xl:w-10/12 mx-auto flex flex-col lg:flex-row justify-between items-center'>
                <div>
                    <p className='text-lg'>SALE 20% OFF ALL STORE</p>
                    <h1 className='text-3xl font-semibold'>Subscribe our Newsletter</h1>
                </div>
                <div className='bg-white px-4 rounded py-1 flex justify-between xl:w-[554px]'>
                    <input {...register("email")}
                        type="email"
                        className='bg-white text-black'
                        placeholder='Enter your email address' />
                    <button onSubmit={handleSubmit(onSubmit)}
                        className="btn bg-[#3B4DF0] border-none">Subscribe</button>
                </div>
                <img src={message} alt="" />
            </div>
        </div>
    );
};

export default NewsletterSubscribe;