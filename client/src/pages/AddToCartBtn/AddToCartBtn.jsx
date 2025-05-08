import React from 'react';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';
import UseAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddToCartBtn = ({ product }) => {

    const axiosPublic = UseAxiosPublic()
    const { user } = UseAuth()
    const navigat = useNavigate()


    const cartItem = {
        productId: product.id,
        productName: product.name,
        produtImage: product.image,
        productPrice: product.price,
        userEmail: user?.email

    }

    const handleAddToCart = async () => {
        await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This item save on your cart",
            showConfirmButton: false,
            timer: 1500
        });
        axiosPublic.post('/cart', cartItem)
        navigat('/allShopingCart')

    }

    return (
        <div>
            <button
                onClick={handleAddToCart}
                className="btn btn-primary w-52 py-6 btn-outline border bo">Add To Cart</button>
        </div>
    );
};

export default AddToCartBtn;