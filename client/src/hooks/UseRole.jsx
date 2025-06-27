import UseAuth from "./UseAuth";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from '@tanstack/react-query';

const UseRole = () => {
    const axiosPublic = UseAxiosPublic()
    const { user, loading } = UseAuth()

    const { data: role=[]  } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic(`/user/role/${user?.email}`)
            return data?.role
        }
    })
    console.log(role)
    return [role]
};

export default UseRole;