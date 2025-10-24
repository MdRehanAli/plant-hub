import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { FaStarAndCrescent } from 'react-icons/fa6';

const PlantCares = () => {
    return (
        <div>
            <h1 className='text-center text-3xl lg:text-5xl font-bold text-green-950'>Plant Growth & Care</h1>
            <p className='text-center text-green-800 mt-5 mb-16'>Learn the essential tips to keep your indoor plants healthy and happy all year long.</p>

            <Marquee pauseOnHover>
                <div className='flex gap-10'>
                    <div className='ml-10 p-10 rounded-2xl bg-green-200 w-[350px]'>
                        <h1 className='text-2xl font-semibold text-center text-green-950'>Garden Design</h1>
                        <p className='text-justify text-green-900 my-3 text-lg'>Imagine stepping into your own private oasis, a garden designed just for you, where every plant, path, and stone tells your story.</p>
                        <div className='flex justify-between items-center text-lg'>
                            <p className='text-green-500'>Care Rating:</p>
                            <p className='flex gap-1 text-yellow-400'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /></p>
                        </div>
                    </div>
                    <div className='p-10 rounded-2xl bg-green-200 w-[350px]'>
                        <h1 className='text-2xl font-semibold text-center text-green-950'>Garden Design</h1>
                        <p className='text-justify text-green-900 my-3 text-lg'>Imagine stepping into your own private oasis, a garden designed just for you, where every plant, path, and stone tells your story.</p>
                        <div className='flex justify-between items-center text-lg'>
                            <p className='text-green-500'>Care Rating:</p>
                            <p className='flex gap-1 text-yellow-400'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /></p>
                        </div>
                    </div>
                    <div className='p-10 rounded-2xl bg-green-200 w-[350px]'>
                        <h1 className='text-2xl font-semibold text-center text-green-950'>Garden Design</h1>
                        <p className='text-justify text-green-900 my-3 text-lg'>Imagine stepping into your own private oasis, a garden designed just for you, where every plant, path, and stone tells your story.</p>
                        <div className='flex justify-between items-center text-lg'>
                            <p className='text-green-500'>Care Rating:</p>
                            <p className='flex gap-1 text-yellow-400'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /></p>
                        </div>
                    </div>
                    

                </div>
            </Marquee>
        </div>
    );
};

export default PlantCares;