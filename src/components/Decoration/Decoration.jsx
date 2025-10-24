import React from 'react';

const Decoration = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10 p-5 lg:p-10 bg-gradient-to-b lg:bg-gradient-to-r from-green-100 via-green-200 to-green-300 rounded-2xl mb-20 mt-10 lg:mt-20'>
            <div>
                <h1 className='lg:text-left text-center text-3xl lg:text-5xl font-bold text-green-950'>Eco Decoration Ideas</h1>
                <p className='lg:text-left text-center text-green-800 mt-5 mb-8'>Transform your living space with greenery and create a sustainable, stylish oasis.</p>
                <ul className='ml-5 lg:ml-12 list-disc text-green-800'>
                    <li>Vertical Garden Walls</li>
                    <li>Natural Centerpieces (succulents, candles, pebbles)</li>
                    <li>Wooden and Bamboo Planters</li>
                    <li>Window Plant Shelves</li>
                    <li>Rustic Terrariums</li>
                    <li>Green Corners with Rattan Furniture</li>
                    <li>Upcycled Plant Holders</li>
                    <li>LED Plant Lighting</li>
                    <li>Hanging Macramé Planters</li>
                    <li>Mirror + Greenery Combo</li>
                </ul>
            </div>
            <div className='grid grid-cols-2 gap-10 lg:w-1/2'>
                <img className='w-[300px] rounded-xl mx-auto hover:scale-120 transition-transform duration-300 shadow-2xl' src="https://i.ibb.co.com/cc6KTt3k/decoration1.png" alt="Decoration Image" />
                <img className='w-[300px] rounded-xl mx-auto hover:scale-120 transition-transform duration-300 shadow-2xl' src="https://i.ibb.co.com/BVKzJZtQ/decoration2.png" alt="Decoration Image" />
                <img className='w-[300px] rounded-xl mx-auto hover:scale-120 transition-transform duration-300 shadow-2xl' src="https://i.ibb.co.com/7tvvq3hb/decoration3.png" alt="Decoration Image" />
                <img className='w-[300px] rounded-xl mx-auto hover:scale-120 transition-transform duration-300 shadow-2xl' src="https://i.ibb.co.com/DHZ1b9BK/decoration4.png" alt="Decoration Image" />
            </div>
        </div>
    );
};

export default Decoration;