import message from '../../assets/images/icon/messege.png'
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';

const NewsletterSubscribe = () => {

    const axiosPublic = UseAxiosPublic()

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        const email = data.email
        axiosPublic.post('/subscriber', { email })
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Successfully you subscribe",
            showConfirmButton: false,
            timer: 1500
        });
        console.log(data)

    }





    return (
        <div className='bg-[#3B4DF0] lg:mx-0 mx-4 lg:p-0 p-4 lg:rounded-none rounded font-montserrat mt-24'>
            <div className='xl:w-[1340px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10'>
                <div>
                    <p className='text-lg'>SALE 20% OFF ALL STORE</p>
                    <h1 className='text-3xl font-semibold'>Subscribe our Newsletter</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='bg-white px-1 rounded py-1 flex justify-between xl:w-[554px]'>
                        <input {...register("email")}
                            type="email"
                            required
                            className='bg-white text-black focus:outline-none w-full'
                            placeholder='Enter your email address' />
                        <div className='form-control'>
                            <button
                                className="btn bg-[#3B4DF0] border-none">Subscribe</button>
                        </div>
                    </div>
                </form>
                <img src={message} alt="" />
            </div>
        </div>
    );
};

export default NewsletterSubscribe;