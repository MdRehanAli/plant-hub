import React from 'react';
import errorImage from '../../assets/error.png';

const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12 my-10'>
            <img className='mx-auto w-2xl' src={errorImage} alt="Error Image" />
        </div>
    );
};

export default ErrorPage;