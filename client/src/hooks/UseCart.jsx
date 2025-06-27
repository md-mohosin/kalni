import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';
import UseAuth from './UseAuth';

const UseCart = () => {
    const axiosPublic = UseAxiosPublic()
    const { user } = UseAuth()
    const { data: cartData = [], refetch } = useQuery({
        queryKey: ['carti', user?.email],
        queryFn: async () => {
            const cartItem = await axiosPublic.get(`/cart?email=${user.email}`)
            return cartItem.data
        }
    })

    return [cartData,refetch]
};

export default UseCart;