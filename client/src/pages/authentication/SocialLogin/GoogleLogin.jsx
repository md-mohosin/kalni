import React from 'react';
import UseAuth from '../../../hooks/UseAuth';
import { FaGoogle } from 'react-icons/fa';
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';

const GoogleLogin = () => {
    const { googleLogin, user } = UseAuth()
    const handleGoogleLogin = () => {
        googleLogin()
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