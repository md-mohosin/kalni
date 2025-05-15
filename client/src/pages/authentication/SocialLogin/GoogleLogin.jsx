
import UseAuth from '../../../hooks/UseAuth';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const navigate = useNavigate()
    const { googleLogin, user } = UseAuth()
    const handleGoogleLogin = () => {
        googleLogin()
        navigate('/')
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>
                <FaGoogle color='black' size={30}></FaGoogle>
            </button>
        </div>
    );
};

export default GoogleLogin;