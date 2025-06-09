import { useQuery } from '@tanstack/react-query';
import cartIcon from '../../../assets/images/shopping-cart-plus.png'
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';
import UseAuth from '../../../hooks/UseAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewAllProducts = () => {

    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate()
    const { user } = UseAuth()

    const { data: allProducts = [] } = useQuery({
        queryKey: ['allPro'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allProducts')
            return res.data
        }
    })



    const handleAddToCart = (id) => {

        if (!user) {

            Swal.fire({
                title: "Please log in to save this item to your cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
            });
        }

        else {
            navigate(`/detailsProduct/${id}`)
        }
    }

    return (
        <div className='pt-[120px] text-black xl:w-[1340px] mx-auto flex justify-between font-montserrat'>
            <div className='w-[287px] h-auto bg-white rounded'>

            </div>

            <div>
                <div className='bg-white py-4 px-3 mb-8 rounded'>
                    <h1 className='text-2xl font-semibold'>Shop</h1>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-6 gap-x-6'>
                    {
                        allProducts.map(singleProduct => <div className='flex flex-col justify-between w-[306px] h-full rounded text-black p-3 bg-white space-y-2'>
                            <img src={singleProduct.image} className='w-full h-56' alt="" />
                            <h1 className='text-3xl font-semibold'>{singleProduct.name}</h1>
                            <p>{singleProduct.category}</p>
                            <p>({singleProduct.review}review)</p>
                            <p className='text-[#E4333E] font-semibold text-xl'>${singleProduct.price}</p>
                            <button onClick={() => handleAddToCart(singleProduct._id)}
                                className="btn w-full bg-[#3B4DF0] border-none"><img src={cartIcon} alt="" /> Add to Cart</button>
                        </div>
                        )
                    }
                </div>
            </div>

        </div >
    );
};

export default ViewAllProducts;