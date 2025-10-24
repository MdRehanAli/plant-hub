import React from 'react';
import { Link } from 'react-router';

const Plant = ({ plant }) => {
    const { plantId, plantName, price, rating, description, image } = plant;
    return (
        <div>
            <div className="card shadow-sm">
                <figure>
                    <img className=''
                        src={image}
                        alt="Plant" />
                </figure>
                <div className="card-body">
                    <h2 className="font-bold text-2xl text-center text-green-700 ">
                        {plantName}
                    </h2>
                    <p className='text-justify text-green-800'>{description.slice(0, 200)}....
                        <Link className='text-green-600 hover:text-pink-500 font-bold text-md' to={`/plantDetails/${plantId}`} > View Details</Link >
                    </p>
                    {/* <p className='text-3xl text-bold text-green-950 font-semibold text-center my-4'>Category: <span className='text-green-800'>{category}</span></p> */}
                    <p className='text-5xl text-green-950 font-bold text-center mt-4'>Price: <span className='text-green-500'>${price}</span></p>
                    <p className='text-3xl text-center mb-5 text-green-950 font-semibold'>Ratings: <span className='text-yellow-400 font-bold'>{rating}</span></p>
                    <Link className='btn bg-green-800 text-white hover:hue-rotate-180 transition-transform duration-300' to={`/plantDetails/${plantId}`} >View Details</Link >
                </div>
            </div>

        </div>
    );
};

export default Plant;