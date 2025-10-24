import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Plant from './Plant';

const Plants = () => {

    const plants = useLoaderData();

    console.log(plants)

    return (
        <div className='max-w-7xl mx-auto w-11/12 my-20'>
            <h1 className='text-center text-3xl lg:text-5xl font-bold text-green-950'>All Plants Collection</h1>
            <p className='text-center text-green-800 mt-5'>Celebrate each season with plants carefully selected for their beauty, resilience, and seasonal charm, ensuring your garden and home are always in perfect bloom.</p>
            <Suspense fallback={<p className='text-center'><span className="loading loading-bars loading-xl"></span></p>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10'>
                    {
                        plants.map(plant => <Plant key={plant.plantId} plant={plant}></Plant>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Plants;