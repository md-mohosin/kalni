import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import UseCart from "../../../hooks/UseCart";
import Swal from "sweetalert2";

const CustomerOrder = () => {
    const axiosPublic = UseAxiosPublic()
    const [cartData, refetch] = UseCart()
    // const totalPrice = cartData.reduce((total, item) => total + item.productPrice, 0)

    const handleDelete = (id) => {
        axiosPublic.delete(`/cart/${id}`)
            .then(() => {
                refetch()
            })
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Delete it",
            showConfirmButton: false,
            timer: 1500
        })


    }

    return (
        <div className="border p-4 rounded-2xl">
            <h1 className="text-4xl text-black">All Orders</h1>
            <div className='w-[800px]'>
                <table className="table">
                    {/* head */}
                    <thead className='text-black'>
                        <tr>
                            <th className='text-lg'>Product</th>
                            <th className='text-lg'>Price</th>
                            <th className='text-lg'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartData.map(item => <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="h-16 w-[72px]">
                                                <img
                                                    src={item.produtImage}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className='text-xl font-semibold text-black'>{item.productName}</h1>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-black'>
                                    <h1 className='text-[#3B4DF0] font-semibold text-lg'>{item.productPrice}</h1>
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)}>
                                        <AiOutlineDelete size={30} color='red'></AiOutlineDelete>
                                    </button>
                                </th>
                            </tr>
                            )
                        }

                    </tbody>

                    <Link to='/allProducts'>
                        <div className='pt-6'>
                            <button className='btn bg-[#3B4DF0] border-none text-white'>Continue Shoping</button>
                        </div>
                    </Link>

                </table>
            </div>


        </div>
    );
};

export default CustomerOrder;