import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const MyProfile = () => {
    const { user } = use(AuthContext)
    return (
        <div className='max-w-7xl mx-auto w-11/12 my-10'>
            <h1 className='text-3xl lg:text-5xl text-center text-green-950 font-bold'>My Profile Details</h1>
            <div className='flex flex-col justify-between items-center gap-10 my-10'>
                <div className='p-5 shadow-2xl rounded-2xl relative'>
                    <img className='rounded-2xl w-[300px] mx-auto' src={user && user.photoURL} alt="Provide correct image url to view" />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-center text-3xl lg:text-5xl font-bold text-green-950 mt-10'>Name: <span className='text-green-600'>{user && user.displayName}</span></h1>
                        <p className=' text-green-950 mt-5'><span className='font-bold'>Email: </span><span className='text-green-800'>{user && user.email}</span></p>
                        <Link to="/signup" className='btn bg-green-800 border-none text-white mt-5 hover:bg-green-500 shadow-none w-full'>Update Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;