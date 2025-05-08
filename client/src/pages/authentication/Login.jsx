import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/icon/Vector.png'
import icon from '../../assets/images/icon/Back.png'
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import UseAuth from '../../hooks/UseAuth';
import GoogleLogin from './SocialLogin/GoogleLogin';

const Login = () => {

    const navigate = useNavigate()

    const { login } = UseAuth()

    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()

    const onSubmit = async (data) => {

        login(data.email, data.password)
            .then(async (result) => {
                console.log(result.user)


                await Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(data)
                reset()
                navigate('/')
            })

    }


    return (
        <div className='bg-white min-h-screen'>
            <div className="min-h-screen flex flex-col justify-center items-center relative">
                <Link to='/'>
                    <div className='flex items-center gap-3 absolute top-7 lg:top-11 left-0 lg:left-11 text-black'>
                        <img src={icon} className='w-10' alt="" />
                        <h1 className='font-semibold text-lg'>Back to Home</h1>
                    </div>
                </Link>

                <div className='flex items-center justify-center gap-4 pb-12'>
                    <img src={logo} alt="" />
                    <h1 className='text-[#2A42B0] italic text-3xl font-semibold'>Kalni</h1>
                </div>

                <div className=" bg-white w-full max-w-sm px-6 py-16 shadow-css rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="space-y-8">
                        <h1 className='text-black text-3xl text-center font-semibold'>Login</h1>
                        <div className="form-control">
                            <input {...register("email")}
                                type="email"
                                placeholder="Email"
                                className="input border border-gray-500 bg-white p-4 focus:outline-none text-black w-full"
                                required />
                        </div>
                        <div className="form-control">
                            <input {...register("password")}
                                type="password"
                                placeholder="Password"
                                className="input bordere border-gray-500 focus:outline-none bg-white text-black w-full"
                                required />
                        </div>
                        <div className="form-control mt-6 flex items-center gap-6">
                            <button className="btn bg-[#1D2939] border-none w-full px-6 text-lg text-white">Login</button>
                        </div>
                    </form>
                    <div className='flex justify-center pt-6'>
                        <GoogleLogin></GoogleLogin>
                    </div>
                    <h1 className='text-black pt-6 text-lg'>Don't have an account? <Link to='/signup' className='text-red-600 font-bold'>SignUP</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;