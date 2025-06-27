
import UseAuth from '../hooks/UseAuth';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user } = UseAuth()
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>

};

export default PrivetRoute;