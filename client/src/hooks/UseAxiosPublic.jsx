import axios from 'axios';

const UseAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL: 'http://localhost:4000'
    })
    return axiosPublic
};

export default UseAxiosPublic;