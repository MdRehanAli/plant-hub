import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { FaStarAndCrescent } from 'react-icons/fa6';

import fertilizers from "../../../src/assets/fertilizers.png";
import watering from "../../../src/assets/watering.png";
import sunlight from "../../../src/assets/sunlight.png";

const PlantCares = () => {
    return (
        <div>
            <h1 className='text-center text-3xl lg:text-5xl font-bold text-green-950'>Plant Growth & Care</h1>
            <p className='text-center text-green-800 mt-5 mb-16'>Learn the essential tips to keep your indoor plants healthy and happy all year long.</p>

            <Marquee pauseOnHover>
                <div className='flex gap-10'>
                    <div className='ml-10 rounded-2xl bg-green-200 w-[350px]'>
                        <img className='rounded-t-2xl' src={watering} alt="watering" />
                        <div className=' p-6'>
                            <h1 className='text-2xl font-semibold text-center text-green-950'>Watering Wisdom</h1>
                            <p className='text-justify text-green-900 my-3 text-lg'>Proper watering is key to plant health. Check soil moisture before watering, let excess drain, and avoid overwatering. In winter, water less as plants grow slowly and need less moisture.</p>
                            <div className='flex justify-between items-center text-lg'>
                                <p className='text-green-500'>Care Rating:</p>
                                <p className='flex gap-1 text-yellow-400'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /></p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-2xl bg-green-200 w-[350px]'>
                        <img className='rounded-t-2xl' src={sunlight} alt="sunlight" />
                        <div className='p-6 '>
                            <h1 className='text-2xl font-semibold text-center text-green-950'>Sunlight & Placement</h1>
                            <p className='text-justify text-green-900 my-3 text-lg'>Light fuels plant growth, but intensity matters. Most indoor plants prefer bright, indirect light. Rotate weekly for even growth, avoid harsh sun, and use grow lights when natural light is low.</p>
                            <div className='flex justify-between items-center text-lg'>
                                <p className='text-green-500'>Care Rating:</p>
                                <p className='flex gap-1 text-yellow-400'> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-2xl bg-green-200 w-[350px]'>
                        <img className='rounded-t-2xl' src={fertilizers} alt="fertilizers" />
                        <div className='p-6 '>
                            <h1 className='text-2xl font-semibold text-center text-green-950'>Fertilizing & Growth</h1>
                            <p className='text-justify text-green-900 my-3 text-lg'>Fertilize plants every 3–4 weeks in spring and summer with a balanced, water-soluble fertilizer. Reduce in fall and winter. Avoid overfertilizing; ensure proper light and watering for healthy growth.</p>
                            <div className='flex justify-between items-center text-lg'>
                                <p className='text-green-500'>Care Rating:</p>
                                <p className='flex gap-1 text-yellow-400'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /></p>
                            </div>
                        </div>
                    </div>


                </div>
            </Marquee>
        </div>
    );
};

export default PlantCares;