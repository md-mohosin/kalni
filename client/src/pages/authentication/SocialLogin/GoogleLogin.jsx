import UseAuth from '../../../hooks/UseAuth';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';

const GoogleLogin = () => {
    const axioPublic = UseAxiosPublic()
    const navigate = useNavigate()
    const { googleLogin } = UseAuth()
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                const userData = {
                    name: result.user.displayName,
                    email: result.user.email,
                }
                axioPublic.post('/user', userData)
                    .then(() => {
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
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