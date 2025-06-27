import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/icon/Vector.png'
import icon from '../../assets/images/icon/Back.png'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import UseAuth from '../../hooks/UseAuth';
import GoogleLogin from './SocialLogin/GoogleLogin';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';

const Signup = () => {

    const axiosPublic = UseAxiosPublic()

    const navigate = useNavigate()

    const { signIn } = UseAuth()

    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => {

        signIn(data.email, data.password)
            .then(async (result) => {
                console.log(result.user)

                await Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Signup successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(data)
                reset()
                navigate('/')


                const userData = {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    // photo: data.display.photoURL
                }
                axiosPublic.post('/user', userData)


            })
            .catch(error => {
                console.log(error)
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
                        <h1 className='text-black text-3xl text-center font-semibold'>Create an account</h1>
                        <div className="form-control">
                            <input {...register("name")}
                                type="text"
                                placeholder="Name"
                                className="input border border-gray-500 bg-white p-4 focus:outline-none text-black w-full"
                                required />
                        </div>
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
                            <button className="btn bg-[#2A42B0] border-none w-full px-6 text-lg text-white">Signup</button>
                        </div>
                    </form>
                    <div className='flex justify-center pt-6'>
                        <GoogleLogin></GoogleLogin>
                    </div>
                    <h1 className='text-black pt-6 text-lg'>Already have an account? <Link to='/login' className='text-red-600 font-bold'>Login</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Signup;