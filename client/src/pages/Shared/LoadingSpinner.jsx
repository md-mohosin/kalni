import React from 'react';
import { BallTriangle, FidgetSpinner } from 'react-loader-spinner'
const LoadingSpinner = () => {
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen bg-white'>
                <div>

                    <FidgetSpinner
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="fidget-spinner-loading"
                        wrapperStyle={{}}
                        wrapperClass="fidget-spinner-wrapper"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;