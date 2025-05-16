import axios from 'axios';

const UseAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL: 'https://server-nine-ivory-39.vercel.app'
    })
    return axiosPublic
};

export default UseAxiosPublic;