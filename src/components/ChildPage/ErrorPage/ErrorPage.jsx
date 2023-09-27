/* eslint-disable no-unused-vars */
import React from 'react';

const ErrorPage = () => {
    return (
        <div className='h-screen text-center flex justify-center items-center'>
            <h2 className='text-4xl'>This page <span className='font-bold'>Not Found</span> Please <span className='bg-red-600'>Go Back</span> or <span className='bg-red-600'>Hard refresh</span></h2>
        </div>
    );
};

export default ErrorPage;